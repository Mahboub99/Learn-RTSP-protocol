Stream = require("node-rtsp-stream");

stream = new Stream({
  name: "name",

  streamUrl: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_175k.mov",
  wsPort: 9999
});
