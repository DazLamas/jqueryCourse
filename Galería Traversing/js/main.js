



$(".gallery li").click( apagarHermanos )


function apagarHermanos()   {
    
    $(".gallery li").removeClass("apagado")
    $(this).siblings().addClass("apagado")
    
}






