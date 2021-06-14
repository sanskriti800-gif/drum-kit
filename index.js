for (var i=0 ; i<document.querySelectorAll(".drum").length ; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var innerButton = this.innerHTML;
    makesomenoise(innerButton);
    animate(innerButton);

});
}

   
document.addEventListener("keypress",function(event){
        makesomenoise(event.key);
        animate(event.key);
});

function makesomenoise(key){
    switch(key){
        
        case "w":
                var audio1= new Audio('audio/130NoOil3.wav');
                audio1.play();
            break;
         case "a":
                var audio2= new Audio('audio/Bpm135_Esteban_Break_PL.wav');
                audio2.play();
            break;
        case "s":
                var audio3= new Audio('audio/DRUMS2.wav');
                audio3.play();
            break;
        case "d":
                var audio4= new Audio('audio/Latin House Loop-855-Free-Loops.com.mp3');
                audio4.play();
            break;
         case "j":
                var audio5= new Audio('audio/Latino Line Dance-7020-Free-Loops.com.mp3');
                audio5.play();
            break;
        case "k":
                var audio6= new Audio('audio/Latino Shakers .wav-5247-Free-Loops.com.mp3');
                audio6.play();
            break;
        case "l":
                var audio7= new Audio('audio/Nu Skool Break.wav-13455-Free-Loops.com.mp3');
                audio7.play();
            break;
        default: console.log(innerButton);
            
        }
    }
    function animate(activekey){
        document.querySelector("."+activekey).classList.add("pressed");
       setTimeout(function(){
           document.querySelector("."+activekey).classList.remove("pressed");
       },1000);
     }












