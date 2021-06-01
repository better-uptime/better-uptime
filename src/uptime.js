const fetch = require("node-fetch");
const errors = require("./errors.js");
const arr = require("./json/time_types.json");
module.exports = {
 Uptime: class {
    constructor(opt = {}) {
      let link = opt.url;
      let time = opt.time;
      let task = opt.callback;
      let time_type = opt.time_type;

      if (!time_type) {
        time_type = "s";
      }

      //if user is not write a link give a error
      if (!link) {
        throw new errors(1, "You must write a link.", 3);
      }

      //if link is not a string give error
      if (typeof link != "string") {
        throw new errors(2, "Link parameter must be a string.", 4);
      }

      //if time is not number give a error
      if (typeof time != "number") {
        throw new errors(3, "Time parameter must be a number.", 4);
      }

      if (!time) {
        throw new errors(4, "Please specify a time.", 4);
      }

      if (typeof time_type != "string") {
        throw new errors(5, "Time_Type parameter must be a number.", 4);
      }

      //check time_type
      if (!arr.includes(time_type)) {
        throw new errors(6, "Wrong time format.", 4);
      }

      //check url is valid
      function isValidURL(url) {
        var isValid = url.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        );
        return isValid !== null;
      }

      if (!isValidURL(link)) {
        throw new errors(7, "The link should be the url.", 3);
      }

      //uptime
      setInterval(() => {
        fetch(link)// this uptime link
        if (task && typeof task == "string") {
          eval(task);
        }
      }, require("ms")(time + time_type));
      
      process.on('unhandledRejection', error => {
  if("FetchError".includes(error)) return;
})
      
    }
  }
}