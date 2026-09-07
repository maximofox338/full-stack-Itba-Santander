// Página del carrito: lista las piezas guardadas en localStorage, con total,
// botón "Quitar" por fila y "Vaciar carrito".

const contenedorCarrito = document.getElementById('carrito-contenido')

// Quita la pieza que está en esa posición del array (si la misma pieza
// se agregó dos veces, se saca de a una).
function quitarDelCarrito(posicion) {

    const carrito = obtenerCarrito()
    const carritoNuevo = []

    for (let i = 0; i < carrito.length; i++) {
        if (i !== posicion) {
            carritoNuevo.push(carrito[i])
        }
    }

    guardarCarrito(carritoNuevo)
    actualizarContador()
    renderizarCarrito()
}

function vaciarCarrito() {
    guardarCarrito([])
    actualizarContador()
    renderizarCarrito()
}

function mostrarCarritoVacio() {

    const aviso = document.createElement('p')
    aviso.classList.add('aviso')
    aviso.textContent = 'Tu carrito está vacío. Todavía no elegiste ninguna pieza.'

    const enlace = document.createElement('a')
    enlace.href = 'productos.html'
    enlace.classList.add('boton')
    enlace.textContent = 'Ver catálogo'

    contenedorCarrito.appendChild(aviso)
    contenedorCarrito.appendChild(enlace)
}

function renderizarCarrito() {

    contenedorCarrito.innerHTML = ''

    const carrito = obtenerCarrito()

    if (carrito.length === 0) {
        mostrarCarritoVacio()
        return
    }

    const tabla = document.createElement('table')
    tabla.classList.add('tabla-carrito')

    const titulo = document.createElement('caption')
    titulo.textContent = 'Piezas elegidas'

    // Cabecera
    const cabecera = document.createElement('thead')
    const filaCabecera = document.createElement('tr')

    const thPieza = document.createElement('th')
    thPieza.textContent = 'Pieza'
    const thPrecio = document.createElement('th')
    thPrecio.textContent = 'Precio'
    const thQuitar = document.createElement('th')
    thQuitar.textContent = 'Quitar'

    filaCabecera.appendChild(thPieza)
    filaCabecera.appendChild(thPrecio)
    filaCabecera.appendChild(thQuitar)
    cabecera.appendChild(filaCabecera)

    // Cuerpo: una fila por pieza agregada
    const cuerpo = document.createElement('tbody')
    let total = 0

    carrito.forEach(function (id, posicion) {

        const producto = buscarProducto(id)

        // Si el id guardado no existe en el catálogo, se ignora
        if (producto === null) {
            return
        }

        total = total + producto.precio

        const fila = document.createElement('tr')

        const celdaPieza = document.createElement('td')
        const imagen = document.createElement('img')
        imagen.src = producto.imagenURL
        imagen.alt = producto.nombre + ' de Hermanos Jota'
        const nombre = document.createElement('a')
        nombre.href = 'producto.html'
        nombre.textContent = producto.nombre
        nombre.addEventListener('click', function () {
            localStorage.setItem('productoSeleccionado', JSON.stringify(producto.id))
        })
        celdaPieza.appendChild(imagen)
        celdaPieza.appendChild(nombre)

        const celdaPrecio = document.createElement('td')
        celdaPrecio.classList.add('precio')
        celdaPrecio.textContent = formatearPrecio(producto.precio)

        const celdaQuitar = document.createElement('td')
        const botonQuitar = document.createElement('button')
        botonQuitar.classList.add('boton-quitar')
        botonQuitar.textContent = 'Quitar'
        botonQuitar.addEventListener('click', function () {
            quitarDelCarrito(posicion)
        })
        celdaQuitar.appendChild(botonQuitar)

        fila.appendChild(celdaPieza)
        fila.appendChild(celdaPrecio)
        fila.appendChild(celdaQuitar)
        cuerpo.appendChild(fila)
    })

    // Pie de tabla con el total
    const pie = document.createElement('tfoot')
    const filaTotal = document.createElement('tr')

    const celdaTextoTotal = document.createElement('th')
    celdaTextoTotal.textContent = 'Total'

    const celdaTotal = document.createElement('td')
    celdaTotal.classList.add('precio')
    celdaTotal.textContent = formatearPrecio(total)
    celdaTotal.colSpan = 2

    filaTotal.appendChild(celdaTextoTotal)
    filaTotal.appendChild(celdaTotal)
    pie.appendChild(filaTotal)

    tabla.appendChild(titulo)
    tabla.appendChild(cabecera)
    tabla.appendChild(cuerpo)
    tabla.appendChild(pie)

    // Acciones debajo de la tabla
    const acciones = document.createElement('div')
    acciones.classList.add('acciones-carrito')

    const enlaceCatalogo = document.createElement('a')
    enlaceCatalogo.href = 'productos.html'
    enlaceCatalogo.classList.add('boton')
    enlaceCatalogo.textContent = 'Seguir eligiendo'

    const botonVaciar = document.createElement('button')
    botonVaciar.classList.add('boton-quitar')
    botonVaciar.textContent = 'Vaciar carrito'
    botonVaciar.addEventListener('click', function () {
        const confirmado = confirm('¿Querés vaciar el carrito?')
        if (confirmado === true) {
            vaciarCarrito()
        }
    })

    acciones.appendChild(enlaceCatalogo)
    acciones.appendChild(botonVaciar)

    contenedorCarrito.appendChild(tabla)
    contenedorCarrito.appendChild(acciones)
}

renderizarCarrito()
