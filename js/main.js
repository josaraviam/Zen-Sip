document.addEventListener('DOMContentLoaded', function() {
// Utiliza setInterval para actualizar continuamente el reloj, está establecido en 0
    setInterval(() => {
        const now = new Date(); // Obtiene la fecha y hora actuales.
        const dateTimeContent = document.querySelector('.datetime-content');
        // Actualiza el reloj con la fecha y hora actuales y en formato de 12 horas.
        dateTimeContent.textContent = now.toLocaleString('es-ES', { hour12: true });
    }, 0);
});