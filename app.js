Stream = require("node-rtsp-stream");

stream = new Stream({
  name: "name",

  streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_175k.mov",
  wsPort: 9999,
  ffmpegOptions: {
    // options ffmpeg flags
    "-stats": "", // an option with no neccessary value uses a blank string
    "-r": 200 // options with required values specify the value after the key
  }
});
