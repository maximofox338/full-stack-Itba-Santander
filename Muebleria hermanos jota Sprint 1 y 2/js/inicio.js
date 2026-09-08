// Inicio: 3 productos destacados del catálogo, renderizados con JS.

const idsDestacados = [7, 4, 1]
const contenedorDestacados = document.getElementById('destacados')

// Simulamos una carga asíncrona: primero "Cargando…", después las tarjetas
setTimeout(function () {

    contenedorDestacados.innerHTML = ''

    idsDestacados.forEach(function (id) {
        const producto = buscarProducto(id)
        contenedorDestacados.appendChild(crearTarjeta(producto))
    })

}, 800)
