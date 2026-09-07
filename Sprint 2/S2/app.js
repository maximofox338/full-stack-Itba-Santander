//ejercicio 1

const catalogoMuebles = [
    {
        id: 1,
        nombre: 'Mesa',
        precio: 250,
        imagenURL: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        nombre: 'Silla',
        precio: 120,
        imagenURL: 'https://via.placeholder.com/150'
    },
    {
        id: 3,
        nombre: 'Sillón',
        precio: 500,
        imagenURL: 'https://via.placeholder.com/150'
    }
]

const contenedor = document.getElementById('product-container')

catalogoMuebles.forEach(function(producto) {

    const tarjeta = document.createElement('div')
    tarjeta.classList.add('product-card')

    const nombre = document.createElement('h3')
    nombre.textContent = producto.nombre

    const precio = document.createElement('p')
    precio.textContent = 'Precio: $' + producto.precio

    const imagen = document.createElement('img')
    imagen.src = producto.imagenURL

    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(imagen)

    contenedor.appendChild(tarjeta)
})

//ejercicio 2
const button = document.querySelector('.boton-favorito')

button.addEventListener('click', function() {

    button.classList.toggle('favorito')

    if (button.classList.contains('favorito')) {
        button.textContent = '⭐ Quitar de Favoritos'
    } else {
        button.textContent = '❤️ Añadir a Favoritos'
    }

})

//ejercicio 3
const preferenciasUsuario = {
    tema: 'oscuro',
    idioma: 'es',
    notificaciones: true
}

const btnGuardar = document.querySelector('#btn-guardar')
const btnCargar = document.querySelector('#btn-cargar')

btnGuardar.addEventListener('click', function() {

    const preferenciasJSON = JSON.stringify(preferenciasUsuario)

    localStorage.setItem('misPreferencias', preferenciasJSON)

    alert('Preferencias guardadas')
})

btnCargar.addEventListener('click', function() {

    const preferenciasGuardadas = localStorage.getItem('misPreferencias')

    const preferenciasObjeto = JSON.parse(preferenciasGuardadas)

    console.log(preferenciasObjeto)
})

//ejercicio 4
const formulario = document.querySelector('#form-busqueda')
const inputUsuario = document.querySelector('#input-usuario')
const resultadoUsuario = document.querySelector('#resultado-usuario')

formulario.addEventListener('submit', function(event) {

    event.preventDefault()

    async function buscarUsuario() {

        const nombreUsuario = inputUsuario.value

        try {

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users?username=${nombreUsuario}`
            )

            const data = await response.json()

            if (data.length > 0) {

                resultadoUsuario.innerHTML = ''

                const nombre = document.createElement('p')
                nombre.textContent = 'Nombre: ' + data[0].name

                const email = document.createElement('p')
                email.textContent = 'Email: ' + data[0].email

                const ciudad = document.createElement('p')
                ciudad.textContent = 'Ciudad: ' + data[0].address.city

                resultadoUsuario.appendChild(nombre)
                resultadoUsuario.appendChild(email)
                resultadoUsuario.appendChild(ciudad)

            } else {

                resultadoUsuario.textContent = 'Usuario no encontrado'

            }

        } catch (error) {

            resultadoUsuario.textContent = 'Usuario no encontrado'
            console.log(error)

        }
    }

    buscarUsuario()
})

//ejercicio 5
async function cargarGaleria() {

    const contenedorGaleria = document.querySelector('#galeria')

    try {

        const response = await fetch(
            'https://jsonplaceholder.typicode.com/photos?_limit=12'
        )

        const fotos = await response.json()

        fotos.forEach(function(foto) {

            const imagen = document.createElement('img')

            imagen.src = foto.thumbnailUrl
            imagen.alt = foto.title

            imagen.addEventListener('click', function() {
                alert(foto.title)
            })

            contenedorGaleria.appendChild(imagen)
        })

    } catch (error) {

        console.log('Error al cargar las fotos', error)

    }
}

cargarGaleria()