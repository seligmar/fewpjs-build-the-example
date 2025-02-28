// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const url = "http://mimicServer.example.com"


// Your JavaScript code goes here!

const hearts = document.querySelectorAll('.like-glyph')
const message = document.querySelector("#modal")

//hearts.addEventListener('click', likeStatement)

hearts.forEach(heart => addEventListener('click', likeStatement))

document.addEventListener('DOMContentLoaded', removeMessage)

function removeMessage() {
  message.remove();
}

function likeStatement(e) {
    e.preventDefault();
    if (e.target.innerText === FULL_HEART) {
      e.target.innerText = EMPTY_HEART
      e.target.className = "like-glyph"
    }
    else {
    e.target.className = "activated-heart"
    e.target.innerText = FULL_HEART
    }
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
