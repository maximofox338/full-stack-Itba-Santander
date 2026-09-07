let totalCompra = 0

while(confirm('Desea agregar mas productos al carrito?')) {
    let cdad = parseFloat(prompt('Ingrese la cantidad del producto: '))
    if (!isNaN(cdad)){ 
           totalCompra += cdad
        }
    else {
        alert('el numero ingresado no es valido')
    }
}

alert(`Su total de compra es: $${totalCompra}`)
