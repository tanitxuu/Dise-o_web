$(document).ready(function () {
    $("#hamburgesa").on({
        click: function () {
            let c = $('#menu').css('display');
            let img = $('#imgburger'); // Seleccionamos la imagen por su id

            if (c === 'none') {
                $("#menu").slideToggle();
                img.attr("src", "../img/svg/bx-x.svg"); // Cambiamos la fuente de la imagen
            } else {
                $("#menu").slideToggle();
                img.attr("src", "../img/svg/bx-menu.svg");
            }

        }
    })
    
    $("#inicio").on({
        click: function () {
            window.location.href = "index.html";
        }
    })
    })

    

