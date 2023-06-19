window.onload = function() {
    var fechaObjetivo = new Date(); // Obtiene la fecha y hora actuales
    fechaObjetivo.setHours(22, 0, 0, 0); // Establece la hora objetivo (en este caso, 8 PM)

    var contadorElemento = document.getElementById("contador"); // Obtiene el elemento HTML donde se mostrará el contador

    // Función para actualizar el contador regresivo
    function actualizarContador() {
        var ahora = new Date(); // Obtiene la fecha y hora actuales
        var diferencia = fechaObjetivo - ahora; // Calcula la diferencia entre la fecha objetivo y la actual en milisegundos

        // Calcula los minutos restantes redondeando hacia abajo
        var minutos = Math.floor((diferencia / 1000 / 60) % 60);

        // Actualiza el texto del contador
        contadorElemento.textContent = "Tiempo restante: " + minutos + " minutos";
    }

    // Actualiza el contador cada segundo
    setInterval(actualizarContador, 1000);
};
