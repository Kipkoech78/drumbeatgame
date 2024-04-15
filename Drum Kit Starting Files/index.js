
var maxno = document.querySelectorAll(".drum").length;
for(var i=0; i<maxno;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonclicked=this.innerHTML;
    makesound(buttonclicked);
    });

}    
document.addEventListener("keypress", function(event){
    makesound(event.key);
});
function makesound(key) {
    switch(key){
        case "w":
            var audio1 = new Audio('sounds/kick-bass.mp3');
            audio1.play();
            break;
        case "a":
            var audio2 = new Audio('sounds/tom-4.mp3');
            audio2.play();
            break;

        case "s":
            var audio3 = new Audio('sounds/snare.mp3');
            audio3.play();
            break; 
        case "d":
            var audio4 = new Audio('sounds/tom-1.mp3');
            audio4.play();
            break;
        
        case "j":
            var audio5 = new Audio('sounds/tom-2.mp3');
            audio5.play();
            break;
            
        case "k":
            var audio6= new Audio('sounds/tom-3.mp3');
            audio6.play();
            break;
            
        case "l":
            var audio7 = new Audio('sounds/crash.mp3');
            audio7.play();
            break;    
        
        default:
    }
}


// document.querySelectorAll(".drum")[i].addEventListener("click", function(){
//     var buttonclicked= this.innerHTML;
//     switch(buttonclicked){
//         case "w":
//             var audio1 = new Audio('sounds/kick-bass.mp3');
//             audio1.play();
//             break;
//         case "a":
//             var audio2 = new Audio('sounds/tom-4.mp3');
//             audio2.play();
//             break;

//         case "s":
//             var audio3 = new Audio('sounds/snare.mp3');
//             audio3.play();
//             break; 
//         case "d":
//             var audio4 = new Audio('sounds/tom-1.mp3');
//             audio4.play();
//             break;
        
//         case "j":
//             var audio5 = new Audio('sounds/tom-2.mp3');
//             audio5.play();
//             break;
            
//         case "k":
//             var audio6= new Audio('sounds/tom-3.mp3');
//             audio6.play();
//             break;
            
//         case "l":
//             var audio7 = new Audio('sounds/crash.mp3');
//             audio7.play();
//             break;    
        
//         default:



//     }



// }); 

// }


    // if(this.innerHTML ==="w"){
    //     var audio = new Audio('sounds/crash.mp3');
    //     audio.play();

    // }
    // else if(this.innerHTML ==="a"){
    //     var audio = new Audio('sounds/tom-4.mp3');
    //     audio.play();

    // }
    // else if(this.innerHTML ==="s"){
    //     var audio = new Audio('sounds/snare.mp3');
    //     audio.play();

    // }
    // else if(this.innerHTML ==="d"){
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();

    // }
    // else if(this.innerHTML ==="j"){
    //     var audio = new Audio('sounds/tom-2.mp3');
    //     audio.play();

    // }
    // else if(this.innerHTML ==="k"){
    //     var audio = new Audio('sounds/tom-3.mp3');
    //     audio.play();

    // }
    // else if(this.innerHTML ==="l"){
    //     var audio = new Audio('sounds/kick-bass.mp3');
    //     audio.play();

    // }





    // switch(buttonclicked){

    //     case "w":
    //         var audio1 = new Audio('sounds/kick-bass.mp3');
    //         audio1.play();
    //         break;
    //     case "a":
    //         var audio2 = new Audio('sounds/tom-4.mp3');
    //         audio2.play();
    //         break;
    //     case "s":
    //         var audio3 = new Audio('sounds/snare.mp3');
    //         audio3,play();
    //         break;
    //     case "d":
    //         var audio4 = new Audio('sounds/tom-1.mp3');
    //         audio4.play();
    //         break;
            
    //     case "j":
    //         var audio5 = new Audio('sounds/tom-2.mp3');
    //         audio5.play();
    //         break;
    //     case "k":
    //         var audio6 = new Audio('sounds/tom-3.mp3');
    //         audio6.play();
    //         break;
    //     case "l":
    //         var audio7 = new Audio('sounds/crash.mp3');
    //         audio7.play();
    //         break;
    //     default:                
    // }