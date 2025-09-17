//Ejercicio4
function hacerFactura(nombreProducto = "Producto Genérico", precio = 10, impuesto = 21){
    if (isNaN(precio) || isNaN(impuesto)){
        console.log("Los campos de numeros deben ser numéricos");
        return;
    }
    let precioFinalProducto = precio + (precio * impuesto / 100)
    console.log("Numero del producto: "+nombreProducto);
    console.log("Precio final del producto: "+precioFinalProducto)
}
export {hacerFactura};