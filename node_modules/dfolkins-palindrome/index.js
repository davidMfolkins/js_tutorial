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
    if (this.letters()) {
      return this.proccessedContent() === (this.proccessedContent().reverse());
    } else {
      return false
    }  
  }
}
