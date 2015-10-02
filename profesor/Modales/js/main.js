

$("#btn-saludar").on("click" , { icono:"info"  } , mostrarMensaje )
$("#btn-chungo").on("click"  , { icono:"error" } , mostrarMensaje )


function mostrarMensaje(e)   {
    
    var $nuevoMsg = $("<div class='modal " + e.data.icono + "'><div><b></b><i></i><p>Crónicas marcianas empezó a emitirse el 8 de septiembre de 1997 para competir con el programa presentado por Pepe Navarro en Antena 3 La sonrisa del pelícano, entonces líder de audiencia de la franja nocturna.</p></div></div>").fadeIn(350)
        
    $("body").prepend( $nuevoMsg )
    
    $(".modal b").click( cerrarMensaje )
    $(".modal").click( cerrarMensaje )
    
    $(".modal > div").click(
        function(e)  {
            e.stopPropagation()
        }
    )
}


function cerrarMensaje()   {
    
    $(".modal").fadeOut(250 ,
        function()  {
            $(this).remove()
        }
    )
}















