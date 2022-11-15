var cowsay = require("cowsay");

var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();

console.log(cowsay.say({
    text :getRandomJoke.body,
    e : "👀",
    T : "U "
}));
var cowsay = require("cowsay");
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
console.log(cowsay.say({
    text:getRandomJoke.body, 
    e: "00",
    T: ""
}));
