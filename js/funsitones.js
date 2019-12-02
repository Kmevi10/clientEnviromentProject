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
.