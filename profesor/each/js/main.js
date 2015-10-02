



$("p").each(
    function() {
        
        var $esteP = $(this)
        
        var suTexto = $esteP.text()

        var suNumCaracteres = suTexto.length

        if( suNumCaracteres > 100 )    {
    
            $esteP.addClass("pLargo")
        }
    }
)





