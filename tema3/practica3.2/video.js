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
        let imgplay = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAl0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iDUAnFgDxA4JOxaGAkA/+A/V9AOIJQNxIjiXEWAAzF+SLRCA+QIpFpFgAMxcUbIXEBhs5FoAsIjrYyLWA6GCj1IKHQJsS8MULuRZ8hKasBkIRTo4FG0nJG6RYQDA4sPmGGAuIDg5yLKB5UUEoDgnKEwoiggYQUjBqAaEQon2lDwCCBSIZQeNI9AAAAABJRU5ErkJggg==";
        let imgpause = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAARElEQVRIS2NkoDFgpLH5DKMWEAzhkRFE/5HCAeZjbGJYg4uYIBq1gGBKGw2i0SDCXyITk9EIhiE+BaMWEAy+0SAiGEQAoSkUGZGNMAQAAAAASUVORK5CYII=";
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
        let muted="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABiUlEQVRIS7WVjTEEQRBG7yJABE4EyOBkQAZkIAMnAkTgRIAIEAEhnAjIgO+p6am+3pmdXVU7VV13uzPdr/+mdz6beM0ntj+LgFMBXyXfDfBK+0hzeQDGHyUfkpMK5Ejv7yX8mi4OXSa9DtADdpP3hxUIHl85C6b7k95d6HcdCTFFJcjCee31TfdcL28lO5IOpFRkD9lICUBpeV1S9p4OkV7S9rfiIQ4SpodU7GddIkCHOtxIcOqgBGBjX2JhtiC+BhhE32yc6f9TjMCKxfshEA+4SxFYFA96JrKtFHnAEIgH0NrHkqXkxafJ1yACWpDYpsXnFqAPsqdNbrw59m9ADWI3/ksH3lJ6rF0/9bxo1YB9v0qFB4LRa8kqFZpWLRaZcLmNfavWXRQY2EbiW32ri5baXKcDYyEYf5Ywq3J6YopKRgnbDzg703dPqqOi5rWND6asX9Y1cXaRrvw9KQ27GihG43Wro34MALCPJup6iHVV55PZaKK8TTRIXECYR3lvbARDHcjnJgf8AgIJaRnpC2I9AAAAAElFTkSuQmCC";
        let musi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABLUlEQVRIS9VV7RHBQBCVCpQgKkAHlKCD6EAH0gEqEB3ogA7QAR3ogPdMLvNmXeYuJD/szM595Hbfvt29S9LrWJKO/fe+BcgRGDUoTQHG8LiDcnS2J8yX0IsPrQkAI16JE2f7LPcWGAsLEgOgUau9s82wuYH2oR8gIQAbtQ+AewziXH6cYWTa3qIAU6yZ39SXS8+eMmBqWIc19AYd+gD4YRDpXINjDeiQ9s7HHPODZeCKFYuhRd6WDByLPdZZmwBs0QmUaT5qmrQGvzCwKavWfwNwRchsVZeiO+ZpmzWIKvIDiLyNsaJdFNWmpFdAY+9C3UWr0mNT5Is8x6Y+cHpGGyTqqahLDY3JbGQOKAM+MZTGj536tGxae64VRNm0/sOxbMgoKKH/QdBB6EDnAC+x1kYZ4CP93gAAAABJRU5ErkJggg==";
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