$(() => $("#votarCoche").click(event => {
    event.preventDefault();
    listaUsuarios.filter(x => x.nombre_usuario === $("#usuarioQueVota").val()).length >= 1 &&
        listaCoches.filter(x => x.modelo === $("#cocheAVotar").val()).length >= 1 ?
        listaVotos.push(new Voto($("#usuarioQueVota").val(), $("#votoCoche").val(), $("#cocheAVotar").val())) :
        $("divErrorUser").append(`<div>No es posible encontara su usuario, voto = ${$("#votoCoche").val()}.</div>`);
    console.log(listaVotos);
}));