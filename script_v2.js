document.addEventListener('DOMContentLoaded', function() {
    // Configuración de fechas
    const fechaInicio = new Date(2024, 7, 22, 0, 0, 0); // 22 de agosto de 2024
    const fechaAniversario = new Date(2026, 7, 22, 0, 0, 0); // 22 de agosto de 2026 (2 años)

    // Lista de canciones con sus datos
    const canciones = [
        {
            numero: 1,
            titulo: "Mi Corazón",
            artista: "MC Davo",
            fecha: "17/09/24",
            archivo: "Mi_Corazon.mp3",
            mensaje: "Te dedico esta canción con todo mi amor. 🌹",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=MC+Davo"
        },
        {
            numero: 2,
            titulo: "El Color de tus Ojos",
            artista: "Banda MS",
            fecha: "16/10/24",
            archivo: "El_color_de.mp3",
            mensaje: "Nuestra historia tiene su propia banda sonora, y esta es una de mis favoritas. ❤️",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Banda+MS"
        },
        {
            numero: 3,
            titulo: "Una más para ti",
            artista: "Cornelio Vega",
            fecha: "31/10/24",
            archivo: "Una_mas_para.mp3",
            mensaje: "Siempre que la escucho, siento que estás a mi lado. 🎶",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Cornelio"
        },
        {
            numero: 4,
            titulo: "Ojos de Amor",
            artista: "Manuel Lizarazo",
            fecha: "05/10/24",
            archivo: "Ojos_de_amor.mp3",
            mensaje: "Cada nota de esta canción me recuerda a ti. 💖",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Manuel"
        },
        {
            numero: 5,
            titulo: "Lo que te amo",
            artista: "Crecer Germán",
            fecha: "08/11/24",
            archivo: "Lo_que_te_amo.mp3",
            mensaje: "Cierro los ojos y solo pienso en nosotros cuando suena esta melodía. 💫",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Crecer"
        },
        {
            numero: 6,
            titulo: "Y que quede claro",
            artista: "La Arrolladora",
            fecha: "29/11/24",
            archivo: "Y_que_quede.mp3",
            mensaje: "Esta canción dice lo que mi corazón siente por ti. 💕",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Arrolladora"
        },
        {
            numero: 7,
            titulo: "De ti Exclusivo",
            artista: "La Arrolladora",
            fecha: "21/12/24",
            archivo: "De_ti_exclusivo.mp3",
            mensaje: "No importa cuantas veces la escuche, siempre me hará pensar en ti. 🥰",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Arrolladora"
        },
        {
            numero: 8,
            titulo: "Y Cambio mi Suerte",
            artista: "Virlan García",
            fecha: "06/01/25",
            archivo: "Y_cambio_mi.mp3",
            mensaje: "Nuestra canción, nuestro momento, nuestro amor. ❤️🎵",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Virlan"
        },
        {
            numero: 9,
            titulo: "Me Gusta Todo de ti",
            artista: "El Recodo",
            fecha: "12/02/25",
            archivo: "Me_gusta_todo_de_ti.mp3",
            mensaje: "No hay letra que describe mejor lo que siento por ti.",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Recodo"
        },
        {
            numero: 10,
            titulo: "Todo Porque te Amo",
            artista: "Fidel Rueda",
            fecha: "20/01/25",
            archivo: "Todo_porque.mp3",
            mensaje: "Es increíble cómo una canción puede hacerme sonreír pensando en ti. 😊",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Fidel"
        },
        {
            numero: 11,
            titulo: "Entre Beso y Beso",
            artista: "La Arrolladora",
            fecha: "12/02/25",
            archivo: "Entre_Beso.mp3",
            mensaje: "Siempre que escuches esta canción, recuerda cuánto te amo. 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Arrolladora"
        },
        {
            numero: 12,
            titulo: "Te Regalo",
            artista: "Rels B",
            fecha: "05/03/25",
            archivo: "Te_regalo.mp3",
            mensaje: "Siempre que escuches esta canción, recuerda cuánto te amo. 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Rels+B"
        },
        {
            numero: 13,
            titulo: "El Amor de mi Vida",
            artista: "La Adictiva",
            fecha: "06/03/25",
            archivo: "El_Amor_De.mp3",
            mensaje: "Eres mi todo mi amor 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Adictiva"
        },
        {
            numero: 14,
            titulo: "Queda Restringido",
            artista: "Los Perdidos de Sinaloa",
            fecha: "11/03/25",
            archivo: "Queda_Restringido.mp3",
            mensaje: "Siempre te amaré mi niña 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Perdidos"
        },
        {
            numero: 15,
            titulo: "Mi Bello Angel",
            artista: "Los Primos MX",
            fecha: "26/03/25",
            archivo: "Mi_Bello.mp3",
            mensaje: "Te amo mi cielo 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Primos+MX"
        },
        {
            numero: 16,
            titulo: "Contigo",
            artista: "Calibre 50",
            fecha: "16/04/25",
            archivo: "Contigo.mp3",
            mensaje: "Te amo mi cielo 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Calibre+50"
        },
        {
            numero: 17,
            titulo: "Voy a Amarte",
            artista: "Perdidos de Sinaloa",
            fecha: "27/04/25",
            archivo: "voy_a_amarte.mp3",
            mensaje: "Eres mi vida entera mi amor 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Perdidos"
        },
        {
            numero: 18,
            titulo: "Es Por Ti",
            artista: "Juanes",
            fecha: "30/05/25",
            archivo: "es_por_ti.mp3",
            mensaje: "Eres mi vida entera mi amor 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Juanes"
        },
        {
            numero: 19,
            titulo: "Tal como Eres",
            artista: "Gerardo Ortiz",
            fecha: "30/05/25",
            archivo: "tal_como_eres.mp3",
            mensaje: "Eres mi vida entera mi amor 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Gerardo"
        },
        {
            numero: 20,
            titulo: "Eres",
            artista: "Café Tacuba",
            fecha: "18/08/25",
            archivo: "Eres.mp3",
            mensaje: "Te Amo con todo mi corazón 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Cafe+Tacuba"
        },
        {
            numero: 21,
            titulo: "Mi Mayor Anhelo",
            artista: "Banda MS",
            fecha: "25/08/25",
            archivo: "Anhelo.mp3",
            mensaje: "Eres mi mayor anhelo 💞",
            imagen: "https://via.placeholder.com/300x300/ff69b4/ffffff?text=Banda+MS"
        }
    ];

    // Poemas románticos para mostrar aleatoriamente
    const poemas = [
        "Eres mi melodía favorita, mi canción sin final. 💖",
        "Cada nota de esta canción me recuerda a tu sonrisa. 😊",
        "En cada acorde, escucho tu voz y siento tu amor. 🎶",
        "Esta canción es nuestro momento congelado en el tiempo. ⏳",
        "Te amo más de lo que las palabras pueden decir. ❤️",
        "Eres la música que hace bailar mi corazón. 💃",
        "En cada melodía encuentro un pedacito de ti. 🎵",
        "Tu amor es la sinfonía más hermosa de mi vida. 🎼",
        "Cada canción que escuchamos juntos se vuelve eterna. ♾️",
        "Eres mi verso favorito en la canción de la vida. 📝"
    ];

    // Elementos del DOM
    const songsGrid = document.getElementById('songs-grid');
    const floatingPlayer = document.getElementById('floating-player');
    const playerOverlay = document.getElementById('player-overlay');
    const closePlayerBtn = document.getElementById('close-player');
    const playerAlbumArt = document.getElementById('player-album-art');
    const playerTitle = document.getElementById('player-title');
    const playerArtist = document.getElementById('player-artist');
    const playerDate = document.getElementById('player-date');
    const playerMessage = document.getElementById('player-message');
    const playerAudio = document.getElementById('player-audio');
    const poemaElement = document.getElementById('poema');

    // Crear partículas de fondo
    function crearParticulas() {
        const particlesContainer = document.getElementById('particles');
        const numParticulas = 50;

        for (let i = 0; i < numParticulas; i++) {
            const particula = document.createElement('div');
            particula.className = 'particle';
            
            // Posición aleatoria
            particula.style.left = Math.random() * 100 + '%';
            particula.style.top = Math.random() * 100 + '%';
            
            // Tamaño aleatorio
            const size = Math.random() * 4 + 2;
            particula.style.width = size + 'px';
            particula.style.height = size + 'px';
            
            // Duración de animación aleatoria
            particula.style.animationDuration = (Math.random() * 3 + 3) + 's';
            particula.style.animationDelay = Math.random() * 2 + 's';
            
            particlesContainer.appendChild(particula);
        }
    }

    // Generar las tarjetas de canciones
    function generarCanciones() {
        canciones.forEach(cancion => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            songCard.innerHTML = `
                <div class="song-header">
                    <div class="song-number">${cancion.numero}</div>
                    <div class="song-info">
                        <h3>${cancion.titulo}</h3>
                        <div class="song-meta">${cancion.artista} • ${cancion.fecha}</div>
                    </div>
                </div>
                <p class="song-message">${cancion.mensaje}</p>
                <button class="play-button">
                    <i class="fas fa-play"></i>
                    Reproducir
                </button>
            `;

            songCard.addEventListener('click', () => reproducirCancion(cancion));
            songsGrid.appendChild(songCard);
        });
    }

    // Reproducir canción
    function reproducirCancion(cancion) {
        playerAlbumArt.src = cancion.imagen;
        playerTitle.textContent = cancion.titulo;
        playerArtist.textContent = cancion.artista;
        playerDate.textContent = cancion.fecha;
        playerMessage.textContent = cancion.mensaje;
        playerAudio.src = cancion.archivo;

        // Mostrar reproductor
        playerOverlay.classList.add('active');
        floatingPlayer.classList.add('active');

        // Reproducir audio
        playerAudio.play().catch(e => {
            console.log('Error al reproducir:', e);
        });

        // Mostrar poema aleatorio
        mostrarPoemaAleatorio();
    }

    // Mostrar poema aleatorio
    function mostrarPoemaAleatorio() {
        const poemaAleatorio = poemas[Math.floor(Math.random() * poemas.length)];
        poemaElement.textContent = poemaAleatorio;
    }

    // Cerrar reproductor
    function cerrarReproductor() {
        playerOverlay.classList.remove('active');
        floatingPlayer.classList.remove('active');
        playerAudio.pause();
        playerAudio.currentTime = 0;
    }

    // Contador de tiempo juntos
    function actualizarContador() {
        const ahora = new Date();
        let diferencia = ahora - fechaInicio;

        if (diferencia < 0) {
            document.getElementById('contador').textContent = "0 años, 0 meses, 0 días, 0 horas, 0 minutos, 0 segundos ❤️";
            return;
        }

        let segundos = Math.floor(diferencia / 1000) % 60;
        let minutos = Math.floor(diferencia / (1000 * 60)) % 60;
        let horas = Math.floor(diferencia / (1000 * 60 * 60)) % 24;
        let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)) % 30;
        let meses = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 30.44)) % 12;
        let años = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

        document.getElementById('contador').textContent = 
            `${años} años, ${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos ❤️`;
    }

    // Cuenta regresiva para el aniversario de 2 años
    function cuentaRegresiva() {
        const ahora = new Date().getTime();
        const fechaObjetivo = fechaAniversario.getTime();
        const diferencia = fechaObjetivo - ahora;
        
        if (diferencia > 0) {
            let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            let horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            document.getElementById('cuenta-regresiva').textContent = 
                `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos ❤️`;
        } else {
            document.getElementById('cuenta-regresiva').textContent = 
                "¡Ya cumplimos 2 años juntos! 🎉❤️";
        }
    }

    // Event listeners
    closePlayerBtn.addEventListener('click', cerrarReproductor);
    playerOverlay.addEventListener('click', cerrarReproductor);

    // Cambiar poema cuando se reproduce una canción
    playerAudio.addEventListener('play', mostrarPoemaAleatorio);

    // Inicializar todo
    crearParticulas();
    generarCanciones();
    actualizarContador();
    cuentaRegresiva();

    // Actualizar contadores cada segundo
    setInterval(actualizarContador, 1000);
    setInterval(cuentaRegresiva, 1000);
});

