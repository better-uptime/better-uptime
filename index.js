const { Uptime } = require('better-uptime');

var a = new Uptime({
  url: "https://your.domain/",
  time: 10,
  time_type: "second",
  callback: "console.log('your.domain successfully uptime!',link)"
});
