// Declare UI var
const form = document.querySelector('#converter')
const celciusValue = document.querySelector('#celciusValue')
const showFarenheit = document.getElementById('showFarenheit')
const result = document.querySelector('#results')
// Listen for events
form.addEventListener('submit', calculateResult)
// calculate result
function calculateResult(e){
  // Get celcius value
  const inputCelcius = celciusValue.value
  const calculate = (inputCelcius * 9 / 5) + 32
  result.style.display = 'block'
  showFarenheit.value = calculate
  if(inputCelcius === ''){
    showError()
  }
  e.preventDefault()
}

function showError(){
  result.style.display = 'none'
  // Get showError & card
  const showMsg = document.querySelector('.showMsg')
  const card = document.querySelector('.card')
  // Create an Errordiv
  const errorDiv = document.createElement('div')
  // Add a classname
  errorDiv.className = 'alert alert-warning'
  // Add a text and append to the Div element
  errorDiv.appendChild(document.createTextNode('Please check your inputs!'))
  // Insert error before Header
  showMsg.insertBefore(errorDiv, card)
  // set Timing
  window.setTimeout(clearError, 1500)
}
function clearError(){
  document.querySelector('.alert').remove()
}