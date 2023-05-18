const bg = document.getElementById('app');
export function pickColor() {
  let userInput = document.getElementById('card-box');

 if(parseInt(userInput.value) === 0) {
  alert("You enter integer 0, it is read as ZERO")
    bg.style.backgroundColor = 'black';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 1) {
    alert("You enter integer 1, it is read as ONE")
    bg.style.backgroundColor = 'brown';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 2) {
    alert("You enter integer 2, it is read as TWO")
    bg.style.backgroundColor = 'yellow';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 3) {
    alert("You enter integer 3, it is read as THREE")
    bg.style.backgroundColor = 'orange';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 4) {
    alert("You enter integer 4, it is read as FOUR")
    bg.style.backgroundColor = 'magenta';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 5) {
    alert("You enter integer 5, it is read as FIVE")
    bg.style.backgroundColor = 'cyan';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
    
  }
  else if(userInput.value == 6) {
    alert("You enter integer 6, it is read as SIX");
    bg.style.backgroundColor = 'blue';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 7) {
    alert("You enter integer 7, it is read as SEVEN")
    bg.style.backgroundColor = 'green';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 8) {
    alert("You enter integer 8, it is read as EIGHT")
    bg.style.backgroundColor = 'violet';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else if(userInput.value == 9) {
    alert("You enter integer 9, it is read as NINE")
    bg.style.backgroundColor = 'red';
    setTimeout(() => {
      bg.style.backgroundColor = 'white'}
      , 3000)
  }
  else {
    bg.style.backgroundColor = 'white';
    alert("OUT OF INDEX!!!")
  }
}

export function reset() {
  window.location.reload();
}

