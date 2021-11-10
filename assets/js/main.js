let amanecerAudio= new Audio("../chuck_berry_johnny_b_goode_ZFo8-JqzSCM.mp3");
function amanecerReproducir(){
    amanecerAudio.play();
    amanecerAudio.volume=0.2;
}
setTimeout(function(){
    amanecerAudio.pause();
},3000);
addEventListener("load", amanecerReproducir);


