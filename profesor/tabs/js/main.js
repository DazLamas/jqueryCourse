

$("#tabs li:not(.tabActiva)").on("click" , abrirTab )


function abrirTab() {
    
    var indiceDeTabPulsada = $(this).index()
    var $seccionAabrir = $("#tabsWrapper section").eq( indiceDeTabPulsada )
    
    $("#tabsWrapper section").stop().fadeOut(200)
    $seccionAabrir.delay(200).slideDown(600)    
    
    $("#tabs li").removeClass("tabActiva")
    $(this).addClass("tabActiva")
    
    $("#tabs li").off("click")
    $("#tabs li:not(.tabActiva)").on("click" , abrirTab )
}






