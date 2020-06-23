player = new JSMpeg.Player("ws://localhost:9999", {
  canvas: document.getElementById("canvas") // Canvas should be a canvas DOM element
});
function pause() {
  player.pause();
}
function play() {
  player.play();
}
function volumeUp() {
  player.volume = true;
}
function volumeMute() {
  player.volume = false;
}
