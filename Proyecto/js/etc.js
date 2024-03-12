
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
    $('#btnacceptar').on({
        click: function () {
            if ($('#cookies').css('display') != 'none') {
                $('#cookies').fadeOut(600);
              
            } 

        }
    })
    $('#btnrechazar').on({
        click: function () {
            if ($('#cookies').css('display') != 'none') {
                $('#cookies').fadeOut(600);
              
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



        // Ocultar la lista de la temporada 2 al principio
        $('ul#tempo2').hide();

        // Agregar un controlador de eventos al botón de la temporada 1
        $('#btn1').click(function(){
            $('ul#tempo1').show();  // Mostrar lista de la temporada 1
            $('ul#tempo2').hide();  // Ocultar lista de la temporada 2
        });

        // Agregar un controlador de eventos al botón de la temporada 2
        $('#btn2').click(function(){
            $('ul#tempo2').show();  // Mostrar lista de la temporada 2
            $('ul#tempo1').hide();  // Ocultar lista de la temporada 1
        });


  
  $('.megusta').on({
    click: function () {
      
        let img = $(this); // Seleccionamos la imagen por su id

        if (img.attr("src")==="../img/svg/bx-heart.svg") {
           
            img.attr("src", "../img/svg/bxs-heart(1).svg"); // Cambiamos la fuente de la imagen
        } else if(img.attr("src")==="../img/svg/bxs-heart(1).svg") {
         
            img.attr("src", "../img/svg/bx-heart.svg");
        }

    }
});
$(".leer").on({
    click: function () {
        window.location.href = "descripcion.html";
    }
})
$(".leer-cargar").on({
    click: function () {
        window.location.href = "descripcion.html";
    }
})
//Plugin de slider
$(document).ready(function () {
    $("#lightSlider").lightSlider({
        item:1, //le especifico que vaya de 1 en 1
        auto: true, // le especifico que se pasen automaticamente
        speed: 2000, //le indico la velocidad a la que se desplaza 
        loop: true, //le indico que se repita en bucle
    });
});


});