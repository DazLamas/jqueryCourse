var $tablero = $("#tablero")                ,
    contador = 0                            ,
    posX , posY , gradosRotacion            
    



$tablero.click( pegarPostIt )



function pegarPostIt(e)  {
    
    if( contador < 10 )    {
        
        var $nuevoPostIt = $("<article class='postIt'><p>Mañana es sábado<br>:)</p></article>")
        
        posX = e.pageX - $tablero.offset().left - parseFloat( $tablero.css("border-width") )
        posY = e.pageY - $tablero.offset().top - parseFloat( $tablero.css("border-width") )

        $nuevoPostIt.css("left" , posX )
        $nuevoPostIt.css("top" , posY )


        gradosRotacion = Math.random() * 14 - 7

        $nuevoPostIt.css("transform" , "rotate(" + gradosRotacion + "deg)" )
        
        if( contador >= 5 )    {
            $nuevoPostIt.addClass("azul")
        }

        $nuevoPostIt.fadeIn(500)

        $tablero.append( $nuevoPostIt )

        contador++ 
    }
}

