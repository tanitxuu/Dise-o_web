
$(document).ready(function () {
    $("#menu-principal img").on({
        click: function () {
            let c = $('#menu').css('display');
            let img = $('#imgburger'); // Seleccionamos la imagen por su id

            if (c === 'none') {
                $("#menu").slideToggle();
                img.attr("src", "img/svg/bx-x.svg"); // Cambiamos la fuente de la imagen
            } else {
                $("#menu").slideToggle();
                img.attr("src", "img/svg/bx-menu.svg");
            }

        }
    })
    $('#btn').on({
        click: function () {
            if ($('.leer-cargar').css('display') === 'none') {
    $('.leer-cargar').fadeIn(600);
    $('#btn').html('Ver menos'); // Cambiar el contenido dentro del botón a "Ver menos"
} else {
    $('.leer-cargar').fadeOut(600);
    $('#btn').html('Ver todos los comics'); // Restaurar el contenido dentro del botón
}

        }
    })

    $(window).on({
        scroll: function () {
            if ($(this).scrollTop() > 50 && $('#volverarriba').css('display') === 'none') {
                $('#volverarriba').css(
                    'display', 'block'
                )
            } else if ($(this).scrollTop() < 50) {
                $('#volverarriba').css(
                    'display', 'none'
                )
            }

        }
    })



});