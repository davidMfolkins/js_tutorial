let Phrase = require("dfolkins-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a fuckin' palindrome!!!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is NOT a fuckin' palindrome!!! :(`;
  }  
}

document.addEventListener("DOMContentLoaded", function(){
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function() {
    palindromeTester(event);
  });
});



