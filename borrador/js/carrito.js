// Carrito compartido por las 4 páginas.
// Guarda los ids agregados en localStorage (JSON) y actualiza el contador del header.

function obtenerCarrito() {

    const carritoGuardado = localStorage.getItem('carrito')

    if (carritoGuardado === null) {
        return []
    }

    try {
        return JSON.parse(carritoGuardado)
    } catch (error) {
        console.log('El carrito guardado estaba dañado, se empieza uno nuevo', error)
        return []
    }
}

function guardarCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

function actualizarContador() {
    const contador = document.getElementById('contador-carrito')
    contador.textContent = obtenerCarrito().length
}

function agregarAlCarrito(idProducto) {
    const carrito = obtenerCarrito()
    carrito.push(idProducto)
    guardarCarrito(carrito)
    actualizarContador()
}

// Al cargar cualquier página, el header muestra lo que ya había en el carrito
actualizarContador()
