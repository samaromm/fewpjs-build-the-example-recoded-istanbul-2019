// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll('.like')
for(let i=0; i<hearts.length; i++){
  hearts[i].addEventListener('click', press
}
function press(e){
  let heart=e.target
  mimicServerCall()
  .then(function(serverMessage){
      if(heart.innerText==EMPTY_HEART){
        heart.innerText=FULL_HEART
        heart.innerText.style.color='red'
      }
      
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
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
