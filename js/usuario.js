$(() => $("#voto1").click(event => event.preventDefault() + votoCoche(1)));
$(() => $("#voto2").click(event => event.preventDefault() + votoCoche(2)));
$(() => $("#voto3").click(event => event.preventDefault() + votoCoche(3)));
$(() => $("#voto4").click(event => event.preventDefault() + votoCoche(4)));
$(() => $("#voto5").click(event => event.preventDefault() + votoCoche(5)));

/*
 * efecto de las estrellas
 */

$(() => $("#voto1").mouseover(() => cambioColor(1)));
$(() => $("#voto2").mouseover(() => cambioColor(2)));
$(() => $("#voto3").mouseover(() => cambioColor(3)));
$(() => $("#voto4").mouseover(() => cambioColor(4)));
$(() => $("#voto5").mouseover(() => cambioColor(5)));

let votoCoche = voto => $(".divErrorUser").empty() + listaUsuarios.filter(x => x.nombre_usuario === $("#usuarioQueVota").val()).length === 1 &&
    listaCoches.filter(x => x.modelo === $("#cocheAVotar").val()).length >= 1 ?
    listaVotos.push(new Voto($("#usuarioQueVota").val(), voto, $("#cocheAVotar").val())) :
    $(".divErrorUser").append(`<div>No es posible encontar su usuario o modelo.</div>`) + alert("primero: " + (listaUsuarios.filter(x => x.nombre_usuario === $("#usuarioQueVota").val()).length === 1).text + "\nSegundo: " + (listaCoches.filter(x => x.modelo === $("#cocheAVotar").val()).length >= 1).text);

let cambioColor = num => {
    let inputs = [$("#voto1"), $("#voto2"), $("#voto3"), $("#voto4"), $("#voto5")];
    for (const voto of inputs) { voto.removeClass() }
    for (let i = 0; i < num; i++) { inputs[i].addClass("overStar") }
}

$(() => $("#votados").click(event => {
    let correcto = false;
    event.preventDefault();
    $("#mostrarCochesVotados").empty();
    let listadoCochesVotados = listaVotos.filter(x => x.usuario.nombre_usuario === $("#nombreUsuario").val()).coche.sort((a, b) => a.localeCompare(b));
    $("#mostrarCochesVotados").append("<div>Hola</div>")
    correcto ? $("#mostrarCochesVotados").append("<div>No tiene coches favoritos.</div>") : false;
}));

$(() => $("#similares").click(() => {
    for (const elemento of listaVotos.filter(x => x.usuario.nombre_usuario === $("#userSimilar").val())) {
        let mostrar = listaCoches.filter(x => x.marca === elemento.coche.marca);
        for (const coche of mostrar) {
            $("divMostrar").append(`<div>${coche.marca} modelo ${coche.modelo}</div>`);
        }
    }
}));

$(() => $("#datos").click(() => {
    let user = listaUsuarios.filter(x => x.nombre_usuario === $("#nombreUser"));
    $("divMostrardatos").append(`<div><b>Nombre:</b> ${user.nombre_usuario}</div>`);
    $("divMostrardatos").append(`<div><b>Tipo:</b> ${user.tipo}</div>`);
    $("divMostrardatos").append(`<div><b>Email:</b> ${user.email}</div>`);
}));