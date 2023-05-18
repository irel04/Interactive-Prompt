import './style.css'
import javascriptLogo from './javascript.svg'
import { pickColor } from './pickColor.js'
import { reset } from './pickColor.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Welcome</h1>
    <div class="card">
      <label for="card-box">Enter a number: </label>
      <input class="card-box" id="card-box" type="text"></input>
      <input id="continue" class="submit-bttn" type="submit" value="continue"></input>
      <input id="reset" class="reset-bttn" type="submit" value="reset"></input>
    </div>
    <p class="read-the-docs">
      Thank you!!!
    </p>
  </div>
`
let continueBttn = document.getElementById('continue');
let resetBttn = document.getElementById('reset');

continueBttn.addEventListener('click', pickColor)
resetBttn.addEventListener('click', reset)