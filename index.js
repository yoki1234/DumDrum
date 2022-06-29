let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

let audioMap = {
w: new Audio("sounds/tom-1.mp3"),
a: new Audio("sounds/tom-2.mp3"),
s: new Audio('sounds/tom-3.mp3'),
d: new Audio('sounds/tom-4.mp3'),
j:  new Audio('sounds/snare.mp3'),
k: new Audio('sounds/crash.mp3'),
l: new Audio('sounds/kick-bass.mp3')
}

for (const [key, sound] of Object.entries(audioMap)) {
  sound.load();
}

function makeSound(key) {

  let sound = audioMap[key];
  if(sound) {
    sound.play();
  } else {
    console.log("invalid key:" + key);
  }
 
}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
