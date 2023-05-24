$(function(){
var btnAsistente=document.getElementById('init');
btnAsistente.addEventListener('click',function(){
    play();
})
})
  
function play(){
    artyom.initialize({
        lang:"es-ES",
        debug:true,
        continuous:true,
        listen:true
    }).then(function(){
    console.log("escuchando en la consola")
    });
}

artyom.addCommands([
    {
        indexes:["hola","hola como estas","que más"],
        action:function(){
            artyom.say("Qué mas, como estas?.")
        }
    },
    {
        indexes:["cual es tu función", "cual es tu profesion", "a que te dedicas", "función", "quién eres"],
        action:function(){
            artyom.say("Soy un asistente virtual, que identifica un instrumento por el sonido.")
        }
    },
    {
        indexes:["quienes son tus creadores", "quién te creo", "creadores", "creador"],
        action:function(){
            artyom.say("Mis creadores son un grupo de estudiantes de la CIAF, en la carrera de Ingeniería de Software. Sebastian Garcia, Juan Villegas y Eva María.")
        }
    },
    {
        indexes:["inicia","empieza","escucha","identifica"],
        action:function(){
            artyom.say("Ok te escucho");
            init();
        }
    },
    {
        indexes:["chao","adios","hasta luego","apagar"],
        action:function(){
            artyom.say("Hasta luego, que tenga buen dia.");
        }
    }
]);