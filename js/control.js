const form = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

function validarUsuarioVacio()
{
    return usuario.value != '' ; 
}

function validarUsuario()
{
    return usuario.value.indexOf('@') != -1 ; 
}

function validarClave()
{
    return clave.value != '';
}

function validarFormulario()
{
    e = window.event; //Se captura el evento 
    if( validarUsuarioVacio() )
    {
        if( validarUsuario() )
        {
            if( validarClave() == false )
            {
                alert("El campo de clave esta vacio.");
                e.preventDefault();
            }
        }
        else
        {
            alert("El campo de usuario debe llevar \'@\' .");
            e.preventDefault();
        }
    }
    else
    {
        alert("El campo de usuario esta vacio.");
        e.preventDefault();
    }
}

form.addEventListener("submit", validarFormulario  );