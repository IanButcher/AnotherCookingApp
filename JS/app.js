// Definimos un array con colores pastel
var colores = ["#FFD700", "#FFA07A", "#87CEEB", "#98FB98"];
var indiceColor = 0;

// Función para cambiar el color de fondo y del botón
function cambiarColor() {
    document.body.style.backgroundColor = colores[indiceColor];
    document.getElementById("cambiar-color").style.backgroundColor = colores[indiceColor];
    indiceColor = (indiceColor + 1) % colores.length;
}

// Agregamos un event listener al botón
document.getElementById("cambiar-color").addEventListener("click", cambiarColor());
