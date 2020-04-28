// Adds `reverse` to all strings
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palinerome testing
  this.proccessedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true for a plaindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.proccessedContent() === (this.proccessedContent().reverse());
  }
}
