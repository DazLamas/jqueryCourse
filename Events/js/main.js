
var incrementoPos = 25 ,
    nuevoLeft ,
    nuevoTop ,
    teclaPulsada ,
    $caja = $("#caja")


$("body").on("keyup" , moverCaja )



function moverCaja(e)    {

    teclaPulsada = e.which
    
    switch(teclaPulsada)    {
    
        case 37:
                nuevoTop  = parseFloat( $caja.css("top") )
                nuevoLeft = parseFloat( $caja.css("left") ) - incrementoPos
                break
        
        case 38:
                nuevoTop  = parseFloat( $caja.css("top") ) - incrementoPos
                nuevoLeft = parseFloat( $caja.css("left") )
                break
            
        case 39:
                nuevoTop  = parseFloat( $caja.css("top") )
                nuevoLeft = parseFloat( $caja.css("left") ) + incrementoPos
                break
            
        case 40:
                nuevoTop  = parseFloat( $caja.css("top") ) + incrementoPos
                nuevoLeft = parseFloat( $caja.css("left") )
                break
    }
    $caja.css("left" , nuevoLeft + "px" )
    $caja.css("top" , nuevoTop + "px" )
}