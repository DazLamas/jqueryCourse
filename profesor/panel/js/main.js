
setInterval( abrirPanel , 5000)

var panelCerrado = true 

var $botonFlecha = $(".botonFlecha")
var $lateral     = $(".lateral")
var $textoBoton  = $(".textoBoton")

$botonFlecha.click( abrirPanel )


function abrirPanel()   {
    
    var anchoFinal = window.innerWidth - $lateral.width()
    
    $lateral.animate( { width:anchoFinal } , 800 )
            .toggleClass("opaque") 
    
    $botonFlecha.animate( { right:anchoFinal } , 800 )
                .animate( { top:"100%"  } , 400 , 
                    function()  {
                        $botonFlecha.css("top" , "0")
                                    .animate( { top:"50%"  } , 400 , 
                                        function()  {
                                            $botonFlecha.toggleClass("rotado")
                                            
                                            if( panelCerrado == true )  {
                                                $textoBoton.text("Cerrar panel")
                                                panelCerrado = false 
                                            }
                                            else    {
                                                $textoBoton.text("Abrir panel")
                                                panelCerrado = true 
                                            }
                                        }
                        )
                    }
    )
}



