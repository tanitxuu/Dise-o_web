const audio = document.getElementById("myaudio");
const volume = document.getElementById("volumen");
const play = document.getElementById("playpause");

function playaudio() {
    let imgplay = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAl0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iDUAnFgDxA4JOxaGAkA/+A/V9AOIJQNxIjiXEWAAzF+SLRCA+QIpFpFgAMxcUbIXEBhs5FoAsIjrYyLWA6GCj1IKHQJsS8MULuRZ8hKasBkIRTo4FG0nJG6RYQDA4sPmGGAuIDg5yLKB5UUEoDgnKEwoiggYQUjBqAaEQon2lDwCCBSIZQeNI9AAAAABJRU5ErkJggg==";
    let imgpause = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAARElEQVRIS2NkoDFgpLH5DKMWEAzhkRFE/5HCAeZjbGJYg4uYIBq1gGBKGw2i0SDCXyITk9EIhiE+BaMWEAy+0SAiGEQAoSkUGZGNMAQAAAAASUVORK5CYII=";
    if (play.src === imgplay) {
        audio.play();
        play.src = imgpause;
    } else if (play.src === imgpause) {
        audio.pause();
        play.src = imgplay;
    }
}

function restartaudio() {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

function volumen() {
    audio.volume = volume.value / 100;
    document.getElementById("volumenN").innerHTML = Math.round(audio.volume * 100) + "%";


}



