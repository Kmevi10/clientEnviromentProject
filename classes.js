class Coche{/** */
    constructor(marca, modelo, anno, km, combustible, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.anno = anno;
        this.km = km;
        this.combustible = combustible;
        this.precio = precio;
    }
    // GET && SET
    get getMarca(){
        return this.marca;
    }
    get getModelo(){
        return this.modelo;
    }
    get getAnno(){
        return this.anno;
    }
    get getKm(){
        return this.km;
    }
    get getCombustible(){
        return this.combustible;
    }
    get getPrecio(){
        return this.precio;
    }

    set setMarca(marca){
        this.marca = marca;
    }
    set setModelo(modelo){
        this.modelo = modelo;
    }
    set setAnno(anno){
        this.anno = anno;
    }
    set setKm(km){
        this.km = km;
    }
    set setCombustible(combustible){
        this.combustible = combustible;
    }
    set setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return  "Marca: "+ this.marca +
                " ,Modelo: "+ this.modelo + 
                " ,Año: " + this.anno + 
                " ,Kilometros: "+ this.km + 
                " ,Combustible: " + this.combustible + 
                " ,Precio: "+ this.precio;
    }
}
class Persona{/** */
    constructor(nombre, apellidos, telefono, ciudad){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.ciudad = ciudad;
    }

    // METODOS

    get getENombre(){
        return this.nombre;
    }
    get getApellidos(){
        return this.apellidos;
    }
    get getTelefono(){
        return this.telefono;
    }
    get getciudad(){
        return this.ciudad;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setApellidos(apellidos){
        this.apellidos = apellidos;
    }
    set setTelefono(telefono){
        this.telefono = telefono;
    }
    set setCiudad(ciudad){
        this.ciudad = ciudad;
    }
    toString(){
        return "Nombre: " + this.nombre + ", Apellidos: " + this.apellidos + ", Teléfono: " + this.telefono + ", Ciudad: " + this.ciudad;
    }
}

class Promocion{
    constructor(descuento, fechaFin){
        super();
        this.descuento = descuento;
        this.fechaFin = fechaFin;
    }

    //GET && SET
    
    get getDescuento(){
        return this.descuento;
    }
    get getFechaFin(){
        return this.fechaFin;
    }

    set setDescuento(descuento){
        this.descuento = descuento;
    }
    set setFechaFin(fechaFin){
        this.fechaFin = fechaFin;
    }

    obtenerDescuento(){
        return "Precio final: "+ this.precio - this.descuento;
    }
}




class Vendedor extends Persona{
    constructor(empresa, coches){
        super();
        this.empresa = empresa;
        this.coches = coches;
    }

    // METODOS GET & SET

    get getEmpresa(){
        return this.empresa;
    }
    get getCoches(){
        return this.coches;
    }
    set setEmpresa(empresa){
        this.empresa = empresa;
    }
    set setCoches(coches){
        this.coches = coches;
    }
    toString(){
        return "Empresa: "+ this.empresa + " ,Coches"+ this.coches;
    }
}

class Usuario extends Vendedor{
    constructor(nombre_usuario, tipo, email){
        super();
        this.nombre_usuario = nombre_usuario;
        this.tipo = tipo;
        this.email = email;
    }

    // METODOS

    get getNombreUsuario(){
        return this.nombre_usuario;
    }
    get getTipo(){
        return this.tipo;
    }
    get getEmail(){
        return this.email;
    }
    set setNombreUsuario(nombre_usuario){
        this.nombre_usuario = nombre_usuario;
    }
    set setTipo(tipo){
        this.tipo = tipo;
    }
    set setEmail(email){
        this.email = email;
    }
    toString(){
        return "Nombre de usuario: " + this.nombre_usuario + ", Tipo: " + this.tipo + ", Email: " + this.email;
    }
}



class Pedido {
    constructor(usuario, referencia, fecha, precio){
        this.usuario = usuario;
        this.referencia = referencia;
        this.fecha = fecha;
        this.precio = precio;
    }

    // METODOS

    get getReferencia(){
        return this.referencia;
    }
    get getFecha(){
        return this.fecha;
    }
    get getPrecio(){
        return this.precio = precio;
    }
    set setReferencia(referencia){
        this.referencia = referencia;
    }
    set setFecha(fecha){
        this.fecha = fecha;
    }
    set setPrecio(precio){
        this.precio = precio;
    }
    toString(){
        return "Referencia: "+this.referencia+" ,Fecha:"+this.fecha+" ,Precio:"+this.precio;
    }
}

let c1 = new Coche("Seat", "Ibiza", "2016", "120000", "Gasolina", "5000");
let c2 = new Coche("Mercedes", "GLC", "2019", "0", "Gasolina", "125000");
let c3 = new Coche("Volkswagen", "Polo", "2018", "0", "Gasolina", "10000");

let persona1 = new Persona("Javi", "Ruiz Anaya", "654987321", "Sevilla");
let persona2 = new Persona("Carlos", "Mesa Viera", "654987321", "Murcia");
let persona3 = new Persona("Jorge", "Te Queremos", "666666666", "Brookling");

let usuario1 = new Usuario("Kmevi32", "tipo acero", "carlos.mesa@adaits.com");
let usuario2 = new Usuario("iQuiiCks","tipo planta","javier.ruiz@adaits.com");
let usuario3 = new Usuario("ShuJorgito", "tipo Sprint", "jorge.maquinon@adaits.com");

let promocion1 = new Promocion("20%", "31/12/2019");
let promocion2 = new Promocion("60%", "01/01/2020");
let promocion3 = new Promocion("110%", "02/02/2020");

let vendedor1 = new Vendedor("Roberto","Mercedes",["Clase B", "Clase C", "CLG"]);
let vendedor2 = new Vendedor("Kevin","Audi",["A7", "Q7", "TT"]);
let vendedor3 = new Vendedor("Jimmy","BMW",["X6", "320D", "420"]);

let pedido1 = new Pedido("Usuario1", "U0001", "15/05/2019", "15000");
let pedido2 = new Pedido("Usuario2", "U0002", "16/05/2019", "150000");
let pedido3 = new Pedido("Usuario3", "U0003", "17/05/2019", "37000");