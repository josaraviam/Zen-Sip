document.addEventListener('DOMContentLoaded', function() {
    const dateTimeElement = document.getElementById('currentDateTime');
    setInterval(() => {
        const now = new Date();
        dateTimeElement.innerHTML = now.toLocaleString();
    }, 1000);
});
