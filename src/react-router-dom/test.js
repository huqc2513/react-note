const pathToRegexp = require('path-to-regexp');


let reg= pathToRegexp('/home',[],{
  end:true
})

console.log(reg)

console.log(reg.test('/home/12'))