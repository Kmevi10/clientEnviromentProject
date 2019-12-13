document.addEventListener("DOMContentLoaded", event => {
    /*GESTIONAR*/
    document.getElementById("formularioOrdenar").addEventListener("submit", ordenarPrecioSeat);
    document.getElementById("formularioMejorValorado").addEventListener("submit", cochemejorValorado);
    document.getElementById("formularioMejorPrecio").addEventListener("submit", cocheMejorPrecio);
    document.getElementById("formularioNuevo").addEventListener("submit", cocheOrdenarAnno);

})

function marcarInputCorrecto(input) {
    input.classList.remove("erroneo");
    input.classList.add("valido");
}

function marcarInputErroneo(input) {
    input.classList.remove("valido");
    input.classList.add("erroneo");
}

/* GESTION */

/*
 * Filtrar precio
 */

function ordenarPrecioSeat(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarOrdenado");
    mostrar.innerHTML = "";

    let coches = obtenerElementos();
    let div = document.createElement("div");
    for (let coche of coches) {
        div.innerHTML += "<br><b>Marca:</b> " + coche.marca + " <b>Modelo:</b> " + coche.modelo + " <b>Precio:</b> " + coche.precio + "€";
    }
    mostrar.appendChild(div);
}
/*
 * Mejor valorado
 */

function cochemejorValorado(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarMejorValorado");
    mostrar.innerHTML = "";

    let coches = mejorValorado();
    let div = document.createElement("div");
    for (let coche of coches) {
        div.innerHTML += "<br><b>Marca:</b> " + coche.marca + " <b>Modelo:</b> " + coche.modelo + " <b>Precio:</b> " + coche.precio + "€";
    }
    mostrar.appendChild(div);
}

/*
 * Ordenar precio
 */

function cocheMejorPrecio(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarMejorPrecio");
    mostrar.innerHTML = "";

    let coches = ordenarPrecio();
    let div = document.createElement("div");
    for (let coche of coches) {
        div.innerHTML += "<br><b>Marca:</b> " + coche.marca + " <b>Modelo:</b> " + coche.modelo + " <b>Precio:</b> " + coche.precio + "€";
    }
    mostrar.appendChild(div);
}

/*
 * Ordenar año
 */

function cocheOrdenarAnno(event) {
    event.preventDefault();
    let mostrar = document.getElementById("mostrarMasNuevo");
    mostrar.innerHTML = "";

    let coches = ordenarAnno();
    let div = document.createElement("div");
    for (let coche of coches) {
        div.innerHTML += "<br><b>Marca:</b> " + coche.marca + " <b>Modelo:</b> " + coche.modelo + " <b>Año:</b> " + coche.anno;
    }
    mostrar.appendChild(div);
}


/* GESTION */
let obtenerElementos = () => listaCoches.filter(x => x.marca === "Seat").sort((a, b) => a.precio - b.precio);
let mejorValorado = () => listaCoches.filter(x => x.anno === "2019").sort((a, b) => a.votos - b.votos)[0];
let ordenarPrecio = () => listaCoches.filter(x => x.precio).sort((a, b) => a.precio - b.precio);
let ordenarAnno = () => listaCoches.filter(x => x.anno).sort((a, b) => a.anno - b.anno);