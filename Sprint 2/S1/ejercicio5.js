function aplicarDescuento(precio, porcentajeDescuento) {
    let montoDescuento = precio * porcentajeDescuento
    let precioFinal = precio - montoDescuento

    return precioFinal
}

const precioMesa = 250
const precioSilla = 300
const porcentajeDescuento = 0.25

const precioFinalMesa = aplicarDescuento(precioMesa, porcentajeDescuento)
const precioFinalSilla = aplicarDescuento(precioSilla, porcentajeDescuento)

console.log('Precio original de la mesa: ' + precioMesa)
console.log(
    'Con descuento del ' + porcentajeDescuento * 100 +
    '% queda con un precio final de ' + precioFinalMesa
)

console.log('Precio original de la silla: ' + precioSilla)
console.log(
    'Con descuento del ' + porcentajeDescuento * 100 +
    '% queda con un precio final de ' + precioFinalSilla
)