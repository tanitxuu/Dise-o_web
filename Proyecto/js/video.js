document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("video"); 
    var reproducirPausarBtn = document.getElementById("reproduciryPausar");
    var stopBtn = document.getElementById("parar");
    var volumenSlider = document.getElementById("volumen");
    var silenciarBtn = document.getElementById("silenciar");
    var retrocederBtn = document.getElementById("retroceder");
    var adelantarBtn = document.getElementById("adelantar");
    var pantallaCompletaBtn = document.getElementById("pantallaCompleta");
    var tiempoReproduccionDisplay = document.getElementById("tiempoReproduccion");
    var aumentarVelocidadBtn = document.getElementById("aumentarVelocidad");
    var disminuirVelocidadBtn = document.getElementById("disminuirVelocidad");
    const playimg = document.getElementById("playpause");
    const imgvolu = document.getElementById("imgvolu");


    reproducirPausarBtn.addEventListener("click", reproduciryPausar);
    stopBtn.addEventListener("click", pararVideo);
    volumenSlider.addEventListener("input", ajustarVolumen);
    silenciarBtn.addEventListener("click", silenciar);
    retrocederBtn.addEventListener("click", retroceder);
    adelantarBtn.addEventListener("click", adelantar);
    pantallaCompletaBtn.addEventListener("click", alternarPantallaCompleta);
    video.addEventListener("timeupdate", actualizarTiempoReproduccion);
    aumentarVelocidadBtn.addEventListener("click", aumentarVelocidad);
    disminuirVelocidadBtn.addEventListener("click", disminuirVelocidad);
    

    function reproduciryPausar() {
        let imgplay = "";
        let imgpause = "";
        if (video.paused) {
            video.play();
            playimg.src = imgpause;
        } else {
            video.pause();
            playimg.src = imgplay;
        }
    }

    function pararVideo() {
        video.pause();
        video.currentTime = 0;
    }

    function ajustarVolumen() {
        video.volume = volumenSlider.value / 100;
        document.getElementById("volumenN").innerHTML = Math.round(video.volume * 100) + "%";
    }

    function silenciar() {
        let muted="";
        let musi="";
        if(imgvolu.src===musi){
        video.muted = !video.muted;
        imgvolu.src=muted;

        }else if(imgvolu.src===muted){
        video.muted = !video.muted;
        imgvolu.src=musi;
    }
    }



    function retroceder() {
        video.currentTime -= 5;
    }

    function adelantar() {
        video.currentTime += 5;
    }

    function alternarPantallaCompleta() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    }

    function actualizarTiempoReproduccion() {
        var tiempoActual = formatearTiempo(video.currentTime);
        var duracion = formatearTiempo(video.duration);
        tiempoReproduccionDisplay.textContent = tiempoActual + " / " + duracion;
    }

    function formatearTiempo(segundos) {
        var minutos = Math.floor(segundos / 60);
        var segundosRestantes = Math.floor(segundos % 60);
        return minutos + ":" + (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
    }
    function aumentarVelocidad() {
        if (video.playbackRate < 2) {  
            video.playbackRate += 0.1;
        }
    }

    function disminuirVelocidad() {
        if (video.playbackRate > 0.5) {  
            video.playbackRate -= 0.1;
        }
    }
})