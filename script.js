// Cambiar el color de fondo de la página con un clic
document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector('body');
    
    // Función para cambiar el color de fondo
    function cambiarColorFondo() {
        const colores = ['#f4f4f4', '#ecf0f1', '#bdc3c7', '#95a5a6', '#34495e'];
        const colorActual = body.style.backgroundColor;
        const nuevoColor = colores[Math.floor(Math.random() * colores.length)];
        
        // Evita el mismo color de fondo consecutivamente
        if (colorActual !== nuevoColor) {
            body.style.backgroundColor = nuevoColor;
        } else {
            cambiarColorFondo(); // Vuelve a llamar la función si el color es el mismo
        }
    }
    
    // Cambiar el color de fondo cada vez que el usuario haga clic en cualquier parte de la página
    body.addEventListener('click', cambiarColorFondo);
});
