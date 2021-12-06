// https://adventofcode.com/2021/day/1
var fs = require("fs");
var sweeps = (fs.readFileSync("./input.txt")+"").split("\n");
var sweeps = sweeps.map(function(num) { return parseInt(num, 10); });


let number = 0;
for (var i = 0; i < sweeps.length - 1; i++){
    if (sweeps[i] < sweeps[i+1]){
        number++;
    }
}
console.log(number);