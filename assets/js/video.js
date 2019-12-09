var myVideo = document.getElementById('myVideo');

myVideo.volume = 0;

VisSense.VisMon.Builder(VisSense(myVideo, {
    fullyvisible: 0.5
}))
.on('fullyvisible', function() {
    myVideo.play();
})
.on('hidden', function() {
    myVideo.pause();
})
.build()
.start();