(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("dfolkins-palindrome");

let string = prompt("Please enter a sting for palindrome testing");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a fuckin' palindrome!!!`);
} else {
  alert(`"${phrase.content}" is NOT a fuckin' palindrome!!! :(`);
}

},{"dfolkins-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Adds `reverse` to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palinerome testing
  this.proccessedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content
  this.letters = function letter() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns true for a plaindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.proccessedContent() === (this.proccessedContent().reverse());
  }
}

},{}]},{},[1]);
