// Declare UI variable
const form = document.querySelector('#converter')
const celsiusValue = document.querySelector('#celsiusValue')
const showFarenheit = document.getElementById('showFarenheit')
const result = document.querySelector('#results')
const clearBtn = document.querySelector('.clearBtn')
let inputCelsius;

// Listen for events
form.addEventListener('submit', calculateResult)
// calculate result
function calculateResult(e){
  // Get celcius value
  inputCelsius = celsiusValue.value
  const calculate = (inputCelsius * 9 / 5) + 32
  result.style.display = 'block'
  showFarenheit.value = calculate
  if(inputCelsius === ''){
    showError()
  }
  e.preventDefault()
}

function showError(){
  result.style.display = 'none'
  // Get showMsg & card
  const showMsg = document.querySelector('.showMsg')
  const card = document.querySelector('.card')
  // Create an Errordiv
  const errorDiv = document.createElement('div')
  // Add a classname
  errorDiv.className = 'alert alert-warning'
  // Add a text and append to the Div element
  errorDiv.appendChild(document.createTextNode('Please check your inputs!!'))
  // Insert error before Header
  showMsg.insertBefore(errorDiv, card)
  // set Timing
  window.setTimeout(clearError, 2000)
}
function clearError(){
  document.querySelector('.alert').remove()
}
// ClearBtn Feature
clearBtn.addEventListener('click', clearInputs)
function clearInputs(){
  celsiusValue.value = ''
  result.style.display = 'none'
}