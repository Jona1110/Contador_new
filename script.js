// Esperar a que el HTML cargue completamente antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
    // Fecha en la que se hicieron novios (AÑO, MES-1, DÍA, HORA, MINUTO, SEGUNDO)
    const fechaInicio = new Date(2024, 7, 22, 0, 0, 0);

    const poemas = [
    "Eres mi melodía favorita, mi canción sin final. 💖",
    "Cada nota de esta canción me recuerda a tu sonrisa. 😊",
    "En cada acorde, escucho tu voz y siento tu amor. 🎶",
    "Esta canción es nuestro momento congelado en el tiempo. ⏳",
    "Te amo más de lo que las palabras pueden decir. ❤️"
];

musica.addEventListener("play", () => {
    const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
    document.getElementById("poema").innerText = poemaAleatorio;
});
function cuentaRegresiva() {
    let fechaObjetivo = new Date("2025-08-22T00:00:00").getTime();
    let ahora = new Date().getTime();
    let diferencia = fechaObjetivo - ahora;
    
    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("cuenta-regresiva").textContent = 
        `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos ❤️`;
}


setInterval(cuentaRegresiva, 1000);


    
    function actualizarContador() {
        const ahora = new Date();
        let diferencia = ahora - fechaInicio;

        // Si la fecha actual es menor que la fecha de inicio, muestra "0 tiempo juntos"
        if (diferencia < 0) {
            document.getElementById("contador").textContent = "0 años, 0 meses, 0 días, 0 horas, 0 minutos, 0 segundos ❤️";
            return;
        }

        let segundos = Math.floor(diferencia / 1000) % 60;
        let minutos = Math.floor(diferencia / (1000 * 60)) % 60;
        let horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 30;
        let meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.44)) % 12;
        let años = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

        let contadorElemento = document.getElementById("contador");
        if (contadorElemento) {
            contadorElemento.textContent = `${años} años, ${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos ❤️`;
        }
    }

    // Actualiza el contador cada segundo
    setInterval(actualizarContador, 1000);
    actualizarContador();


});
