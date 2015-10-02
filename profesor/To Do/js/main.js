
var $listaTareas = $("#listaTareas")

$("body").delegate("#listaTareas li" , "click" , marcarComoHecha )
$("#btn-nuevaTarea").click( agregarTarea )
$("#btn-todasHechas").click( marcarTodas )
$("#btn-todasPorHacer").click( desmarcarTodas )
$("#btn-borrarHechas").click( borrarHechas )

$("body").delegate("#listaTareas button" , "click" , borrarTarea )


function borrarTarea(e)  {
    
    e.stopPropagation()
    
    $(this).parent().slideUp(250 ,
        function()  {
            $(this).remove()
        }
    )
                    
}



function marcarComoHecha()  {
    
    $(this).toggleClass("tareaHecha")
}



function agregarTarea() {
    
    var $nuevaTarea = $("<li>Esta es una nueva tarea<button></button></li>").fadeIn(250)
    
    $listaTareas.append($nuevaTarea)
    
}


function marcarTodas() {
    
    $("#listaTareas li").addClass("tareaHecha")   
}



function desmarcarTodas() {
    
    $("#listaTareas li").removeClass("tareaHecha")   
}


function borrarHechas() {
    
    $(".tareaHecha").slideUp(250 ,
        function()  {
            $(this).remove()
        }
    ) 
}