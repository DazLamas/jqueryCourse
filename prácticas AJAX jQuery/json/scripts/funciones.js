
$( "#boton1" ).click( cargarUsuario ) 

function cargarUsuario(e)	{
	
    e.preventDefault()
    
	var num = $("#cod").attr("value") ;
	
	$.getJSON( "datosUsuarios.php" , { cod:num } , mostrarDatosCargados ) 
	
}

function mostrarDatosCargados(datos)	{
    
	$("#resultados").html( "Nombre:" + datos.nombre + "<br>" + "Apellido:" + datos.apellido + "<br>" + "Direccion:" + datos.direccion )
    
}