

var rutaPHP , enlace , $infoCurso = $(".infoCurso")

$("#mainNav a").on("click" , cargarInfo )


function cargarInfo(e)	{
    
	e.preventDefault()
    
    $enlace = $(this)
    
    $infoCurso.stop().fadeOut( 200 , 
        
        function()  {
        
            rutaPHP = $enlace.attr("href")

            $infoCurso.load( rutaPHP ,

                function()    {
                    $infoCurso.slideDown(600)
                }
            )
        }
    )
}