










$(".btn").on("click", { saludo:"Hola" , nombre:"Pepito" } , saludar )

$(".btn.bla").on("click", { saludo:"Ey!" , nombre:"Vicente" } , saludar )



function saludar(e)  {
    
    var mensaje = e.data.saludo + " te llamas " + e.data.nombre
    
    console.log(mensaje)
    
}