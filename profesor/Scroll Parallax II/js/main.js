
var scrolled                                                ,
    parallax        =   0.5                                 ,
    $ventana        =   $(window)                           ,
    $nubes           =   $(".nube")                          
    
$nubes.each(
    function()  {
        
        $estaNube = $(this)
        var suTopInicial = $estaNube.attr("data-posInicial")
        
        console.log(suTopInicial)
        
        $estaNube.css("top" , suTopInicial + "px")
    }
)





function aplicarParallax()  {
    
    
    scrolled = $ventana.scrollTop()
    
    $nubes.each(
        function()  {
            
            $estaNube = $(this)
            
            var suNuevoTop = scrolled *
                             parseFloat( $estaNube.attr("data-parallax")  )   +
                             parseFloat( $estaNube.attr("data-posInicial"))

            $estaNube.css("top" , suNuevoTop )

        }
    )
    
}


$ventana.scroll( aplicarParallax ) 
