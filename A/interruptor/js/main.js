
var luzEncendida = true 


$("#interruptor").click( controlarLuz )



function controlarLuz() {
    
    
    if(luzEncendida == true)    {
        $("body").stop().animate({ backgroundColor:"#222" } , 800 ) // Apaga la luz.
        luzEncendida = false
    }
    else    {
        $("body").stop().animate({ backgroundColor:"#ebe172" } , 800 ) // Enciende la luz.
        luzEncendida = true
    }
    
}