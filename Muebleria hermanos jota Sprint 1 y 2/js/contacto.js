// Contacto: validación del lado del cliente y mensaje de éxito en el DOM.

const formularioContacto = document.getElementById('form-contacto')
const inputNombre = document.getElementById('nombre')
const inputEmail = document.getElementById('email')
const inputMensaje = document.getElementById('mensaje')

const errorNombre = document.getElementById('error-nombre')
const errorEmail = document.getElementById('error-email')
const errorMensaje = document.getElementById('error-mensaje')
const mensajeExito = document.getElementById('mensaje-exito')

// Un email válido tiene texto, luego "@", luego texto con un punto en el medio.
function emailEsValido(email) {

    const posicionArroba = email.indexOf('@')
    const posicionPunto = email.lastIndexOf('.')

    return posicionArroba > 0 &&
        posicionPunto > posicionArroba + 1 &&
        posicionPunto < email.length - 1
}

formularioContacto.addEventListener('submit', function (event) {

    event.preventDefault()

    // Limpiamos los mensajes de la vez anterior
    errorNombre.textContent = ''
    errorEmail.textContent = ''
    errorMensaje.textContent = ''
    mensajeExito.textContent = ''

    const nombre = inputNombre.value.trim()
    const email = inputEmail.value.trim()
    const mensaje = inputMensaje.value.trim()

    let formularioValido = true

    if (nombre === '') {
        errorNombre.textContent = 'Contanos tu nombre para poder responderte.'
        formularioValido = false
    }

    if (email === '') {
        errorEmail.textContent = 'Necesitamos un email para escribirte.'
        formularioValido = false
    } else if (!emailEsValido(email)) {
        errorEmail.textContent = 'Ese email no parece completo. Revisalo, por favor.'
        formularioValido = false
    }

    if (mensaje === '') {
        errorMensaje.textContent = 'Dejanos unas líneas: ¿qué pieza o espacio tenés en mente?'
        formularioValido = false
    }

    if (formularioValido) {
        mensajeExito.textContent = 'Gracias, ' + nombre + '. Recibimos tu mensaje y te escribimos a la brevedad.'

        inputNombre.value = ''
        inputEmail.value = ''
        inputMensaje.value = ''
    }
})
