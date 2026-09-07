// Detalle: lee el id guardado en localStorage y muestra la ficha completa.

const contenedorDetalle = document.getElementById('detalle')

function mostrarNoEncontrado() {

    contenedorDetalle.innerHTML = ''

    const aviso = document.createElement('p')
    aviso.classList.add('aviso')
    aviso.textContent = 'No encontramos esa pieza. Volvé al catálogo para elegir otra.'

    const enlace = document.createElement('a')
    enlace.href = 'productos.html'
    enlace.classList.add('boton')
    enlace.textContent = 'Ver catálogo'

    contenedorDetalle.appendChild(aviso)
    contenedorDetalle.appendChild(enlace)
}

function mostrarProducto(producto) {

    contenedorDetalle.innerHTML = ''

    // Columna de la imagen
    const figura = document.createElement('div')
    figura.classList.add('detalle-imagen')

    const imagen = document.createElement('img')
    imagen.src = producto.imagenURL
    imagen.alt = producto.nombre + ', pieza artesanal de Hermanos Jota'
    figura.appendChild(imagen)

    // Columna de la información
    const info = document.createElement('section')
    info.classList.add('detalle-info')

    const nombre = document.createElement('h1')
    nombre.textContent = producto.nombre

    const precio = document.createElement('p')
    precio.classList.add('precio')
    precio.textContent = formatearPrecio(producto.precio)

    const descripcion = document.createElement('p')
    descripcion.textContent = producto.descripcion

    const botonCarrito = document.createElement('button')
    botonCarrito.classList.add('boton')
    botonCarrito.textContent = 'Añadir al Carrito'

    const mensajeCarrito = document.createElement('p')
    mensajeCarrito.classList.add('exito')

    botonCarrito.addEventListener('click', function () {
        agregarAlCarrito(producto.id)
        mensajeCarrito.textContent = producto.nombre + ' ya está en tu carrito.'
    })

    // Ficha técnica en una tabla
    const tabla = document.createElement('table')
    tabla.classList.add('ficha-tecnica')

    const titulo = document.createElement('caption')
    titulo.textContent = 'Ficha técnica'

    const cabecera = document.createElement('thead')
    const filaCabecera = document.createElement('tr')
    const thEspecificacion = document.createElement('th')
    thEspecificacion.textContent = 'Especificación'
    const thValor = document.createElement('th')
    thValor.textContent = 'Valor'
    filaCabecera.appendChild(thEspecificacion)
    filaCabecera.appendChild(thValor)
    cabecera.appendChild(filaCabecera)

    const cuerpo = document.createElement('tbody')

    producto.especificaciones.forEach(function (especificacion) {
        const fila = document.createElement('tr')

        const celdaNombre = document.createElement('th')
        celdaNombre.textContent = especificacion.nombre

        const celdaValor = document.createElement('td')
        celdaValor.textContent = especificacion.valor

        fila.appendChild(celdaNombre)
        fila.appendChild(celdaValor)
        cuerpo.appendChild(fila)
    })

    tabla.appendChild(titulo)
    tabla.appendChild(cabecera)
    tabla.appendChild(cuerpo)

    info.appendChild(nombre)
    info.appendChild(precio)
    info.appendChild(descripcion)
    info.appendChild(botonCarrito)
    info.appendChild(mensajeCarrito)
    info.appendChild(tabla)

    contenedorDetalle.appendChild(figura)
    contenedorDetalle.appendChild(info)

    document.title = 'Hermanos Jota | ' + producto.nombre
}

// Carga asíncrona simulada, igual que en el catálogo
setTimeout(function () {

    const idGuardado = localStorage.getItem('productoSeleccionado')

    if (idGuardado === null) {
        mostrarNoEncontrado()
        return
    }

    const producto = buscarProducto(JSON.parse(idGuardado))

    if (producto === null) {
        mostrarNoEncontrado()
    } else {
        mostrarProducto(producto)
    }

}, 600)
