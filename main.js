let Phrase = require("dfolkins-palindrome");

let string = prompt("Please enter a sting for palindrome testing");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a fuckin' palindrome!!!`);
} else {
  alert(`"${phrase.content}" is NOT a fuckin' palindrome!!! :(`);
}
