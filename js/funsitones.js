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
    document.getElementById("modelo").addEventListener("keyup", validaModelo(document.getElementById("modelo")));
    document.getElementById("formBuscarMarca").addEventListener("submit", comprobarFormulario());
})

function marcarInputCorrecto(input){
    input.classList.remove("erroneo");
    input.classList.add("valido");
}

function marcarInputErroneo(input){
    input.classList.remove("valido");
    input.classList.add("erroneo");
}

function validaMarca(){
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
}



/* BUSQUEDA */
document.getElementById("marca")
let filtrarMarca = (marca,modelo) => console.log(listaCoches.filter(x => x.marca === marca).filter(x => x.modelo === modelo));
let elementoSimilar = coche => console.log(listaCoches.filter(x => coche.marca === x.marca).filter(x => coche.modelo === x.modelo));
let elementosAsociadosUsuario = usuario => console.log(usuario.getCoches());
let filtrarAnno = anno => console.log(listaCoches.filter(x => x.anno === anno));


/* EDICION */
let anadirCoche = (marca,modelo,anno,km,combustible) => console.log(listaCoches.push(new Coche(marca,modelo,anno,km,combustible)));
let editarCoche = (posicion,marca) => console.log(listaCoches[posicion].setMarca = marca);
let eliminarCoche = posicion => listaCoches.splice(posicion);
//Funcion validar Sprint 4

/* GESTION */
let obtenerElementos = console.log(listaCoches.filter(x => x.marca === "Seat").sort((a,b)=>a.precio-b.precio));
let mejorValorado = console.log(listaCoches.filter(x => x.anno === "2019").sort((a,b)=> a.votos-b.votos)[0]);
let ordenarPrecio = ordenacion => console.log(ordenacion === "asc" ? a.precio - b.precio : b.precio - a.precio);
let ordenarAnno = ordenacion => console.log(ordenacion === "asc" ? a.anno - b.anno : b.anno - a.anno);

/* USUARIO */ 
let votarCoche = coche => coche.votos++;
let elementosVotados = usuario => console.log(getListaCochesVotados());
let elementosSimilares = console.log(listaCoches.filter(x => x.marca === getListaCochesVotados().marca));
let mostrarUsuarios = () => console.log(listaUsuarios);