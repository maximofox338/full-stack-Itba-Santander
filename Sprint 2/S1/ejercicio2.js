const contrasenaCorrecta = '1234'

const inputUsuario = prompt('Ingrese su Conteasena:')

if (contrasenaCorrecta === inputUsuario) {
    alert("Acceso Concedido!") }
else if (inputUsuario === '') {
    alert('No se ingreso ninguna constrasena')
    }
else {
    alert("Contrasena incorrecta. Acceso denegado")
}

