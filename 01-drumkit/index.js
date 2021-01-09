// selecting the key and adding sound on keydown + css class

function playSound(key) {
  // selecting the audio
  const audio = document.querySelector(`audio[data-key="${key.keyCode}"]`);
  // selecting the key class
  const keyclass = document.querySelector(`.key[data-key="${key.keyCode}"]`);

  if(!audio) return; // stop the function from running
  audio.currentTime = 0; // reset the sound every time
  audio.play();
  keyclass.classList.add('animate');
};

function removeTransition(event) {
  if (event.propertyName !== 'transform') return; // skip if it's not transform
  this.classList.remove('animate');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
