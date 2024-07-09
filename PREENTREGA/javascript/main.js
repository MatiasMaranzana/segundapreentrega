alert ("Bienvenido a Suplementos Muscle & Fitnes");

alert ("Presentamos nuestra seleccion de productos para vos")

const suplementos = [
    {codigo:23, tipo: "proteina", marca: "ENA", nombre:"True made", presentacion: "1 kg", sabor: "vainilla", precio:14900},
    {codigo:15, tipo: "proteina", marca: "ENA", nombre:"True made", presentacion: "1 kg", sabor: "frutilla", precio:14900},
    {codigo:63, tipo: "proteina", marca: "ENA", nombre:"True made", presentacion: "1 kg", sabor: "chocolate", precio:14900},
    {codigo:12, tipo: "creatina", marca: "STAR NUTRITION", nombre:"crea pure", presentacion: "300 gr", sabor: "neutro", precio:21900},
    {codigo:96, tipo: "creatina", marca: "STAR NUTRITION", nombre:"crea pure", presentacion: "150 gr", sabor: "neutro", precio:13900},
    {codigo:41, tipo: "aminoacidos", marca: "GENETIC", nombre:"BCAA 2000", presentacion: "120 comp.", sabor: "citrus", precio:12500},
    {codigo:21, tipo: "quemador", marca: "PULVER", nombre:"Ripped Max", presentacion: "90 comp.", sabor: "neutro", precio:10500},
    {codigo:52, tipo: "multivitaminico", marca: "PULVER", nombre:"Vitamix", presentacion: "60 comp.", sabor: "naranja", precio:8000},    
];

class articulos {
    constructor(articulos) {
        this.items = articulos;
    }

    agregarArticulo(codigoA, tipoA, marcaA, nombreA, presentacionA, saborA, precioA) {
        const articulo = {codigo:codigoA, tipo:tipoA, marca:marcaA, nombre:nombreA,  presentacion:presentacionA, sabor:saborA, precio:precioA};
        this.items.push(articulo);
        console.log("Se agregó el Producto: #" + codigoA);

    }
    

    buscarArticulos(codigo) {
        return this.items.find(item => item.codigo == codigo)
    }

    obtenerArticulos() {
        return this.items;
    }

    listarArticulos() {
        let salida = "";

        for (const articulo of this.items) {
            salida += `${articulo.codigo} - ${articulo.tipo} - ${articulo.marca} - ${articulo.nombre} - ${articulo.presentacion} - ${articulo.sabor} - $${articulo.precio} \n`;
        }

        alert(salida);
    }
    eliminarArticulo (codigo) {
        this.items = this.items.filter (item => item.codigo != codigo);
        console.log("Se eliminó el Producto: #" + codigo);
    }

    productoEspecifico (codigo) {
        this.items = this.items.filter (item => item.codigo == codigo);
    }

    totalArticulos() {
        return this.items.length;
    }

    
}

const catalogo = new articulos(suplementos);

catalogo.listarArticulos();
console.log(catalogo.obtenerArticulos());

catalogo.eliminarArticulo(52);
catalogo.agregarArticulo(87, "quemador", "ultra tech", "rippedmaxxx", "90 comp", "limon", 9000);
console.log(catalogo.obtenerArticulos());

console.log("Tenemos un total de " + catalogo.totalArticulos() + " articulos en catálogo");

