// Catálogo: renderiza los 11 productos y filtra por nombre con el buscador.

const contenedorCatalogo = document.getElementById('catalogo')
const inputBusqueda = document.getElementById('busqueda')

function renderizarCatalogo(textoBuscado) {

    contenedorCatalogo.innerHTML = ''

    let cantidadMostrada = 0

    catalogoMuebles.forEach(function (producto) {

        const nombreEnMinuscula = producto.nombre.toLowerCase()

        if (nombreEnMinuscula.includes(textoBuscado)) {
            contenedorCatalogo.appendChild(crearTarjeta(producto))
            cantidadMostrada++
        }
    })

    if (cantidadMostrada === 0) {
        const aviso = document.createElement('p')
        aviso.classList.add('aviso')
        aviso.textContent = 'No encontramos piezas con ese nombre. Probá con otra palabra.'
        contenedorCatalogo.appendChild(aviso)
    }
}

// Carga asíncrona simulada: "Cargando…" y después el catálogo completo
setTimeout(function () {
    renderizarCatalogo('')
}, 800)

// Cada vez que se escribe en el buscador se vuelve a filtrar
inputBusqueda.addEventListener('input', function () {
    renderizarCatalogo(inputBusqueda.value.toLowerCase())
})
