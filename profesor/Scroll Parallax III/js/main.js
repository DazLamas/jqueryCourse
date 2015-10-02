
var scrolled , posYbg ,
    parallax = 1.2    ,
    $bgConParallax = $("#bgConParallax")



$ventana = $(window)


$ventana.scroll( aplicarParallax )



function aplicarParallax()  {
    
    scrolled = $ventana.scrollTop()
    
    
    posYbg = scrolled * parallax - 1688 + 450
    
    $bgConParallax.css("background-position" , "0 " + posYbg + "px" )
    
    
}