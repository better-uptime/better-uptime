"use strict";

var ad = ' You can come here to get help => https://discord.gg/R4mTca35qq'



function syntax(err, code) {
throw new SyntaxError(`Hey there was an syntax error. Error message: ${err} Error code: ${code}`);
} 


function warn(warn, code) {
 console.warn(`Hey there was an warn. Warn message: ${warn} Warn code: ${code}`);
}


function error(err, code) {
 console.error(`Hey there was an error. Error message: ${err} Error code: ${code}`)
}

function typeerror(err, code){
throw new TypeError(`Hey there was an type error. Error message: ${err} Error code: ${code}`)
}


class UptimeError {
  constructor(code, message, status){
if(status == 1){
error(message, code + ad)
}
if(status == 2){
warn(message, code + ad)
}
if(status == 3){
syntax(message, code + ad)
}
if(status == 4){
typeerror(message, code + ad)
}
  }
  
}
module.exports = UptimeError;