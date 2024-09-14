window.onload = function() {
    const siLibreBtn = document.getElementById("siLibre");
    const noLibreBtn = document.getElementById("noLibre");
    const popup = document.getElementById("popup");
    const contenido = document.getElementById("contenido");

    // Evento para el botón de "Sí, estaré libre"
    siLibreBtn.addEventListener("click", function() {
        // Redirige a otra página web, por ejemplo 'otraPagina.html'
        window.location.href = "E1/A1.HTML";
    });

    // Evento para el botón de "No"
    noLibreBtn.addEventListener("click", function() {
        alert("Bueno, que Dios la bendiga");  // Muestra el mensaje
        window.close();  // Cierra la página web
    });
};
