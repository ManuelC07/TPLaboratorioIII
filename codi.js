
const user= document.getElementById("username").value;

const followButton = document.getElementById('follow-button');

followButton.addEventListener('click', function() {
  if (followButton.textContent === 'Seguir') {
    followButton.textContent = 'Dejar de seguir';
    followButton.style.backgroundColor = "#808080";
    
  } else {
    followButton.textContent = 'Seguir';
    followButton.style.backgroundColor ="#6495ed";
  }
});

var likes = 200;

function incrementLikes() {
  if (likes==200){
    likes++;
  document.getElementById("numLikes").innerHTML = likes;
  } 
};


