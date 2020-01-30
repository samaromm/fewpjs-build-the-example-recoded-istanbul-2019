// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll('.like')
for(let i of hearts){
  i.addEventListener('click', press)
}

function press(e){
  let heart=e.target
  mimicServerCall()
  .then(function(serverMessage){
      alert(serverMessage)
      if(heart.innerText==EMPTY_HEART){
        heart.innerText=FULL_HEART
        heart.classList.add("activated-heart");
      }
      else{
        heart.innerText=EMPTY_HEART
        heart.classList.remove("activated-heart");
      }
      
    })
    .catch(function(error) {
     let errMod = document.querySelector('#modal')
     errMod.classList.remove("hidden")
     errMod.innerText=serverMessage
     setTimeout(() errMod.classList.remove("hidden") => , 2000)
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
