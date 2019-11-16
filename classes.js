class Coche{
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
class Persona{
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
}

class Promocion extends Coche{
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

console.log(c1);



