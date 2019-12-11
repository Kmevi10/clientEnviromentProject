/*
let mostrarCoches = () => console.log(listaCoches);
let mostrarUsuarios = () => console.log(listaUsuarios);
let mostrarPersonas = () => console.log(listaUsuarios);
let mostrarCochesPromocion = promocion => console.log(promocion);
let filtrarMarca = marca => console.log(listaCoches.filter(x => x.marca === marca));
let filtrarModelo = modelo => console.log(listaCoches.filter(x => x.modelo === modelo));
let ordenarPrecio = ordenacion => console.log(ordenacion === "asc" ? a.precio - b.precio : b.precio - a.precio);
let ordenarAnno = ordenacion => console.log(ordenacion === "asc" ? a.anno - b.anno : b.anno - a.anno);
let anadirCoche = (marca,modelo,anno,km,combustible) => console.log(listaCoches.push(new Coche(marca,modelo,anno,km,combustible)));
let anadirUsuario = (nombre,tipo,email) => console.log(listaUsuarios.push(new Usuario(nombre,tipo,email)));
let editarCoche = (posicion,marca) => console.log(listaCoches[posicion].setMarca = marca);
let eliminarCoche = posicion => listaCoches.splice(posicion);
let anadirPromocion = (marca,modelo,anno,km,combustible) => console.log(listaCoches.push(new Coche(marca,modelo,anno,km,combustible)));
let mostrarPersonas = () => console.log(listaUsuarios);
let mostrarCochesPromocion = promocion => console.log(promocion);
let anadirUsuario = (nombre,tipo,email) => console.log(listaUsuarios.push(new Usuario(nombre,tipo,email)));
let anadirPromocion = (marca,modelo,anno,km,combustible) => console.log(listaCoches.push(new Coche(marca,modelo,anno,km,combustible)));
let filtrarModelo = modelo => console.log(listaCoches.filter(x => x.modelo === modelo));
*/

document.addEventListener("DOMContentLoaded", event => {
    document.getElementById("marca").addEventListener("keyup", validaMarca);
    document.getElementById("modelo").addEventListener("keyup", validaModelo);
    document.getElementById("formBuscarMarca").addEventListener("submit", comprobarFormulario1);
    /**/
    document.getElementById("marcaSimilar").addEventListener("keyup", validaMarcaSimilar);
    document.getElementById("formulario2").addEventListener("submit", comprobarFormulario2);
    /**/

    document.getElementById("formulario3").addEventListener("submit", comprobarFormulario3);
    /**/
    document.getElementById("anno").addEventListener("keyup", validaMarca4);
    document.getElementById("formulario4").addEventListener("submit", comprobarFormulario4);
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

function comprobarFormulario1(event) {
    event.preventDefault();
    let marca = validaMarca();
    let modelo = validaModelo();
    let mostrar = document.getElementById("mostrarMarcaModelo");
    mostrar.innerHTML = "";
    if (marca && modelo) {
        let coches = filtrarMarca(document.getElementById("marca").value, document.getElementById("modelo").value);
        let div = document.createElement("div");
        for (let coche of coches) {
            div.innerHTML += coche.marca + " modelo " + coche.modelo + "\n";
        }
        mostrar.appendChild(div);
    } else {

    }
}

/*
 * formulario2 
 */

function validaMarcaSimilar() {
    let marca = document.getElementById("marcaSimilar");
    let correcto = true;
    let divErrores = document.getElementById("divErrorMarcaSimilar");
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

function comprobarFormulario2(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarSimilar");
    mostrar.innerHTML = ""
    if (validaMarcaSimilar()) {
        let coches = elementoSimilar(document.getElementById("marcaSimilar").value);
        let div = document.createElement("div");
        for (let coche of coches) {
            div.innerHTML += coche.marca + " modelo " + coche.modelo;
        }
        console.log(coches)
        mostrar.appendChild(div);
    } else {

    }
}

/*
 * formulario3
 */

function validaMarcaSimilar() {
    let marca = document.getElementById("marcaSimilar");
    let correcto = true;
    let divErrores = document.getElementById("divErrorMarcaSimilar");
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

function comprobarFormulario2(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarSimilar");
    mostrar.innerHTML = ""
    if (validaMarcaSimilar()) {
        let coches = elementoSimilar(document.getElementById("marcaSimilar").value);
        let div = document.createElement("div");
        for (let coche of coches) {
            div.innerHTML += coche.marca + " modelo " + coche.modelo;
        }
        console.log(coches)
        mostrar.appendChild(div);
    } else {

    }
}

function comprobarFormulario3(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarAsociados");
    mostrar.innerHTML = "";
    let usuario = elementosAsociadosUsuario(document.getElementById("nombreUsuario").value);
    let div = document.createElement("div");
    for (let coche of usuario[0].coches) {
        div.innerHTML += coche.marca + " modelo " + coche.modelo;
    }
    mostrar.appendChild(div);

}
/*
 * formulario4
 */

function comprobarFormulario4(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarMarca");
    mostrar.innerHTML = "";
    if (validaMarca4()) {
        let coches = filtrarAnno(document.getElementById("anno").value);
        let div = document.createElement("div");
        for (let coche of coches) {
            div.innerHTML += coche.marca + " modelo " + coche.modelo;
        }
        mostrar.appendChild(div);
    } else {

    }
}

function validaMarca4() {
    let marca = document.getElementById("anno");
    let correcto = true;
    let divErrores = document.getElementById("divErrorMarca4");
    divErrores.innerHTML = "";
    if (marca.value.match(/[^\d]/g)) {
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

/* BUSQUEDA */
document.getElementById("marca")
let filtrarMarca = (marca, modelo) => listaCoches.filter(x => x.marca === marca).filter(x => x.modelo === modelo);
let elementoSimilar = cadena => listaCoches.filter(x => x.marca.includes(cadena) || x.modelo.includes(cadena));
let elementosAsociadosUsuario = nombre => listaUsuarios.filter(x => x.nombre_usuario === nombre);
let filtrarAnno = anno => listaCoches.filter(x => x.anno === anno);


/* EDICION */
let anadirCoche = (marca, modelo, anno, km, combustible) => console.log(listaCoches.push(new Coche(marca, modelo, anno, km, combustible)));
let editarCoche = (posicion, marca) => console.log(listaCoches[posicion].setMarca = marca);
let eliminarCoche = posicion => listaCoches.splice(posicion);
//Funcion validar Sprint 4

/* GESTION */
let obtenerElementos = () => listaCoches.filter(x => x.marca === "Seat").sort((a, b) => a.precio - b.precio);
let mejorValorado = () => listaCoches.filter(x => x.anno === "2019").sort((a, b) => a.votos - b.votos)[0];
let ordenarPrecio = ordenacion => console.log(ordenacion === "asc" ? a.precio - b.precio : b.precio - a.precio);
let ordenarAnno = ordenacion => console.log(ordenacion === "asc" ? a.anno - b.anno : b.anno - a.anno);

/* USUARIO */
let votarCoche = coche => coche.votos++;
let elementosVotados = usuario => console.log(getListaCochesVotados());
let elementosSimilares = () => listaCoches.filter(x => x.marca === getListaCochesVotados().marca);
let mostrarUsuarios = () => console.log(listaUsuarios);
SimilarSimilarSimilar
let div = document.createElement("div");