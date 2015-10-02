

var scrolled                                        ,
    parallax    = 0.5                               ,
    nuevoTop                                        ,
    $ventana    = $(window)                         ,
    $roja       = $("#roja")                        ,
    topInicial  = parseFloat( $roja.css("top") )    
   


$ventana.scroll( aplicarScrollParallax )


function aplicarScrollParallax()    {
    
    scrolled = $ventana.scrollTop()
    
    nuevoTop = scrolled * parallax + topInicial
    

    
    $roja.css("top" , nuevoTop )
}