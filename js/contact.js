document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Previene el envío del formulario para realizar las validaciones

        // Obtén los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Validación de campo requerido para el nombre
        if (name.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            return;
        }

        // Validación de formato de correo electrónico
        if (!validateEmail(email)) {
            alert('Por favor, ingrese un correo electrónico válido.');
            return;
        }

        // Validación de campo requerido para el asunto
        if (subject.trim() === '') {
            alert('Por favor, ingrese un asunto.');
            return;
        }

        // Validación de campo requerido para el mensaje
        if (message.trim() === '') {
            alert('Por favor, ingrese su mensaje.');
            return;
        }

        // Si todo está correcto, aquí puedes proceder a enviar el formulario.
        // Por ejemplo: form.submit();
        alert('Formulario enviado con éxito.');
    });

    // Función para validar el formato del correo electrónico
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
