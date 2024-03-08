$(document).ready(function(){
    //Parte 1
    $('#cookies').children('span').on({
        click:function(){
            $('#cookies').fadeOut()
        }
    })
    //i
    $('#hamburger').on({
        click:function(){
            $('#shop').fadeOut()
            $('#contenido').animate({left:'20rem'});
            $('#menu-toggle').animate({left:0});
            $("#menu-toggle").fadeIn()
        
            
        }
    })
})