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

let votoCoche = voto => {
    $("#divErrorVotos").empty();
    let user = listaUsuarios.filter(x => x.nombre_usuario === $("#nombreUser").val())[0];
    let coche = listaCoches.filter(x => x.modelo === $("#cocheAVotar").val())[0];
    user !== undefined && coche != undefined ? listaVotos.push(new Voto(user, voto, coche)) : $("#divErrorVotos").append(`<div>No es posible encontar su usuario o modelo.</div>`);
};

let cambioColor = num => {
    let inputs = [$("#voto1"), $("#voto2"), $("#voto3"), $("#voto4"), $("#voto5")];
    for (let voto of inputs) { voto.removeClass() }
    for (let i = 0; i < num; i++) { inputs[i].addClass("overStar") }
}

$(() => $("#votados").click(event => {
    let correcto = false;
    event.preventDefault();
    $("#mostrarCochesVotados").empty();
    for (let elemento of listaVotos.filter(x => x.usuario.nombre_usuario === $("#nombreUser").val())) {
        correcto = true;
        $("#mostrarCochesVotados").append(`<div><b>Marca</b> ${elemento.coche.marca} <b>modelo</b> ${elemento.coche.modelo} con <b>${elemento.puntuacion} estrellas</b>.</div>`);
    }!correcto ? $("#mostrarCochesVotados").append(`<div>No has votado ningún coche.</div>`) : false;
}));

$(() => $("#similares").click(event => {
    event.preventDefault();
    for (let elemento of listaVotos.filter(x => x.usuario.nombre_usuario === $("#nombreUser").val())) {
        let mostrar = listaCoches.filter(x => x.marca === elemento.coche.marca);
        for (let coche of mostrar) {
            $("#divMostrar").append(`<div>${coche.marca} modelo ${coche.modelo}</div>`);
        }
    }
}));

$(() => $("#datos").click(event => {
    event.preventDefault();
    $("#divMostrardatos").empty();
    let user = listaUsuarios.find(x => x.nombre_usuario === $("#nombreUser").val());
    $("#divMostrardatos").append(`<div><b>Nombre:</b> ${user.nombre_usuario}</div>`);
    $("#divMostrardatos").append(`<div><b>Tipo:</b> ${user.tipo}</div>`);
    $("#divMostrardatos").append(`<div><b>Email:</b> ${user.email}</div>`);
}));