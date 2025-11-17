## What is this module ?

This module helps to uptime 7/24 a project easily.

## How can i use ?

```js
const { Uptime } = require("better-uptime")

var uptime = new Uptime({
  url: "https://your.domain/",//project link
  time: 1,//time
  time_type: 'minute',// you can use millisecond, minute, hour, day, week
  callback: "console.log('your.domain successfully uptime!')"//callback function action to be performed each time it uptimes
})
```

# Documentation

| Method        | Type           | Description |
| ------------- |:-------------:|:--------------:|
| new Uptime() | Object | You can uptime your project or any other project |

# 'new Uptime()' options

| Option        | Type          | Description |
| ------------- |:-------------:|:--------------:|
| url: "https://your.domain" | String | You can add your link with this option |
| time: 1 | Number | You specify interval |
| time_type: "minute" | String | You specify interval type |
| callback: "console.log('your.domain successfully uptime!')" | String | You specify what uptime-system do on every uptime |