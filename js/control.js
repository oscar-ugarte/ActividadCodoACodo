const form = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const clave = document.getElementById('clave');

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
    if( validarUsuario() )
    {
        if( validarClave() == false )
        {
            alert("El campo clave esta vacio.");
            e.preventDefault();
        }
    }
    else
    {
        alert("El campo usuario debe llevar \'@\' .");
        e.preventDefault();
    }
}

form.addEventListener("submit", validarFormulario  );