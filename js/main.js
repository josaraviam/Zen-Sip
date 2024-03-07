document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        const now = new Date();
        const dateTimeContent = document.querySelector('.datetime-content');
        dateTimeContent.textContent = now.toLocaleString('es-ES', { hour12: true });
    }, 0);
});