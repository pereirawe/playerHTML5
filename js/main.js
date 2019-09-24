
pHTML5 = document.getElementById('playerHTML5');
// playerHTML5.currentTime
pHTML5.pause();
pHTML5.load();
pHTML5.volume = 0.5;
pHTML5.oncanplay = function() {
    // alert("Can start playing video");
    console.log("Waiting to play");
    setTimeout(function(){

        // pHTML5.play();
        console.log("Now playing");

    }, 1000);
    
};
