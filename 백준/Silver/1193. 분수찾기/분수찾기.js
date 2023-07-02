const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString()

let oNum = 0
let sum = 0

for(let i = 1; sum<input; i++) {
  sum = sum  + i
  oNum ++
}


const go = sum - input

let fNum
let LNum


 if(oNum % 2 === 0 ) {
  fNum = oNum - go
  LNum = 1 + go
  console.log(String(fNum) +"/" + String(LNum) );
  
 } else {
   fNum = 1 + go
   LNum = oNum - go
   console.log(String(fNum)+"/" + String(LNum) );
 }