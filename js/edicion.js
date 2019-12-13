

document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("marca").addEventListener("keyup", validaMarca);
    document.getElementById("modelo").addEventListener("keyup", validaModelo);
    document.getElementById("anno").addEventListener("keyup", validaAnno);
    document.getElementById("km").addEventListener("keyup", validaKm);
    document.getElementById("formularioAnadir").addEventListener("submit", comprobarFormularioAnadir);
    /**/
})

function marcarInputCorrecto(input) {
    input.classList.remove("erroneo");
    input.classList.add("valido");
}

function marcarInputErroneo(input) {
    input.classList.remove("valido");
    input.classList.add("erroneo");
}


/*
 * formulario1
 */

function validaMarca() {
    let marca = document.getElementById("marca");
    let correcto = true;
    let divErrores = document.getElementById("divErrorMarca");
    divErrores.innerHTML = "";
    if (marca.value.match(/\d/g)) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = "No se permiten número en este campo.";
        divErrores.appendChild(div);
    }
    if (marca.value.length < 1) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = "Este campo no puede dejarlo vacío.";
        divErrores.appendChild(div);
    }
    correcto ? marcarInputCorrecto(marca) : marcarInputErroneo(marca);
    return correcto;
}


function validaModelo() {
    let modelo = document.getElementById("modelo");
    let correcto = true;
    let divErrores = document.getElementById("divErrorModelo");
    divErrores.innerHTML = "";
    if (modelo.value.match(/[^a-zA-Z\d\-]/g)) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = `Solo se permiten letras, números y "-".`;
        divErrores.appendChild(div);
    }
    if (modelo.value.length < 1) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = `Este campo no puede dejarlo vacío.`;
        divErrores.appendChild(div);
    }
    correcto ? marcarInputCorrecto(modelo) : marcarInputErroneo(modelo);
    return correcto;
}

function validaAnno() {
    let anno = document.getElementById("anno");
    let correcto = true;
    let divErrores = document.getElementById("divErrorAnno");
    divErrores.innerHTML = "";
    if (anno.value.match(/[^\d]/g)) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = `Solo se permiten números.`;
        divErrores.appendChild(div);
    }
    if (anno.value.length < 1) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = `Este campo no puede dejarlo vacío.`;
        divErrores.appendChild(div);
    }
    correcto ? marcarInputCorrecto(anno) : marcarInputErroneo(anno);
    return correcto;
}

function validaKm() {
    let km = document.getElementById("km");
    let correcto = true;
    let divErrores = document.getElementById("divErrorKm");
    divErrores.innerHTML = "";
    if (km.value.match(/[^\d]/g)) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = `Solo se permiten números.`;
        divErrores.appendChild(div);
    }
    if (km.value.length < 1) {
        correcto = false;
        let div = document.createElement("div");
        div.innerHTML = `Este campo no puede dejarlo vacío.`;
        divErrores.appendChild(div);
    }
    correcto ? marcarInputCorrecto(km) : marcarInputErroneo(km);
    return correcto;
}

function comprobarFormularioAnadir(event) {
    event.preventDefault();
    let marca = validaMarca();
    let modelo = validaModelo();
    let anno = validaAnno();
    let km = validaKm();
    let mostrar = document.getElementById("mostrarCocheCreado");
    mostrar.innerHTML = "";
    if (marca && modelo && anno && km) {
        listaCoches.push(anadirCoche($('#marca').val(),$('#modelo').val(),$('#anno').val(),$('#km').val(),$('#combustible').val()));
        let div = document.createElement("div");
            console.log(listaCoches);
            div.innerHTML += "<b>Marca:</b> "+$('#marca').val() + " <b>Modelo:</b> " + $('#modelo').val() + " <b>Anno:</b> "+$('#anno').val()+ "<b>Kilometros:</b> "+$('#km').val()+ "<b>Combustible: </b> "+$('#combustible').val();
        
        mostrar.appendChild(div);
    }
}



$(document).ready(function(){
    $("#nuevoAnno").on("keyup",function(){
        validaNuevoAnno();
    });
    $("#formularioEditar").on("submit",function(){
        event.preventDefault();
        validaEditar();
    });
    console.log(listaCoches)
    $("#formularioEliminar").on("submit",function(){
        event.preventDefault();
        eliminarCoche($("#coche").val())
        console.log(listaCoches)
    });
    
});

function validaNuevoAnno() {
    let anno = $("#nuevoAnno");
    let correcto = true;
    let divErrores = $("#divErrorNuevoAnno");
    anno.removeClass("valido");
    anno.removeClass("erroneo");
    divErrores.empty()
    if (anno.val().match(/[^\d]/g)) {
        correcto = false;
        divErrores.append(`<div>Solo se permiten números.</div>`);
    }
    if (anno.val().length < 1) {
        correcto = false;
        
        divErrores.append(`<div>Este campo no puede dejarlo vacío.</div>`);
    }
    correcto ? anno.addClass("valido") : anno.addClass("erroneo");
    return correcto;
}

function validaEditar(){
    
    let anno = $("#nuevoAnno").val();
    let coche = $("#idCoche").val();
    let mostrar = $("#mostrarNuevoAnno");
    mostrar.empty();
    if (validaNuevoAnno()) {
        
        editarCoche(coche,anno);
        
            console.log(listaCoches);
        
        mostrar.append("<div>Se ha modificado la fecha correctamente</div>");
    }
}


/* EDICION */
let anadirCoche = (marca, modelo, anno, km, combustible) => listaCoches.push(new Coche(marca, modelo, anno, km, combustible));
let editarCoche = (posicion, anno) => listaCoches[posicion].setAnno = anno;
let eliminarCoche = posicion => listaCoches.splice(posicion,1);
//Funcion validar Sprint 4
