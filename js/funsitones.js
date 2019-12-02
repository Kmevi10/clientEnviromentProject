/*
let mostrarCoches = () => console.log(listaCoches);
<<<<<<< HEAD
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
=======
let mostrarPersonas = () => console.log(listaUsuarios);
let mostrarCochesPromocion = promocion => console.log(promocion);
let anadirUsuario = (nombre,tipo,email) => console.log(listaUsuarios.push(new Usuario(nombre,tipo,email)));
let anadirPromocion = (marca,modelo,anno,km,combustible) => console.log(listaCoches.push(new Coche(marca,modelo,anno,km,combustible)));
let filtrarModelo = modelo => console.log(listaCoches.filter(x => x.modelo === modelo));
*/

/* BUSQUEDA */
let filtrarMarca = (marca,modelo) => console.log(listaCoches.filter(x => x.marca === marca).filter(x => x.modelo === modelo));
let elementoSimilar = coche => console.log(listaCoches.filter(x => coche.marca === x.marca).filter(x => coche.modelo === x.modelo));
let elementosAsociadosUsuario = usuario => console.log(usuario.getCoches());
let filtrarMarca = anno => console.log(listaCoches.filter(x => x.anno === anno));


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
let votarCoche = (coche) => coche.votos++;
let elementosVotados = usuario => console.log(getListaCochesVotados());
let elementosSimilares = console.log(listaCoches.filter(x => x.marca === getListaCochesVotados().marca));
let mostrarUsuarios = () => console.log(listaUsuarios);


>>>>>>> 8c585288bc5119f3b932958d592e7bd34970d00a
