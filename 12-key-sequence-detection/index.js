const pressed = [];
const secretCode = 'marty';

window.addEventListener('keyup', (event) => {
  console.log(event.key);
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) { // join('') -> makes array a string
    console.log('WooHoo!')
    cornify_add()
  }
  console.log(pressed);
})
