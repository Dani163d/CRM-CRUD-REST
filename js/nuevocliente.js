
(function() {
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)) {
            console.log('todos los campos son obligar=torios')
            return
        }

        console.log('si se paso la validacion')
    }

    function validar(obj) {
        return !Object.values(obj).every(input => input !== '');
    }


})();