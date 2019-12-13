$(() => $("#voto1").click(event => event.preventDefault() + votoCoche($("#voto1").val())));
$(() => $("#voto2").click(event => event.preventDefault() + votoCoche($("#voto2").val())));
$(() => $("#voto3").click(event => event.preventDefault() + votoCoche($("#voto3").val())));
$(() => $("#voto4").click(event => event.preventDefault() + votoCoche($("#voto4").val())));
$(() => $("#voto5").click(event => event.preventDefault() + votoCoche($("#voto5").val())));

let votoCoche = voto => listaUsuarios.filter(x => x.nombre_usuario === $("#usuarioQueVota").val()).length >= 1 &&
    listaCoches.filter(x => x.modelo === $("#cocheAVotar").val()).length >= 1 ?
    listaVotos.push(new Voto($("#usuarioQueVota").val(), voto, $("#cocheAVotar").val())) :
    $(".divErrorUser").append(`<div>No es posible encontar su usuario o modelo.</div>`);