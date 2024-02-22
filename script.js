const inputBox = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

clearBtn.addEventListener('click', ()=>{
  resultsDiv.innerText = "";
})

checkBtn.addEventListener('click', ()=>{
  if (inputBox.value == "") {
    alert("Please provide a phone number");
    return
  }
  let num = inputBox.value;
  const validNumber = /^1?\s?(?:(\([\d]{3})\)|([\d]{3}))(-|\s)?([\d]{3})(-|\s)?([\d]{4})$/i;
  const valid = validNumber.test(num);
  let msg = "";
  if (valid) {
    msg = "Valid US number: ";
  }
  else {
    msg = "Invalid US number: ";
  }
  resultsDiv.innerHTML += `<p class="${valid ? "valid" : "invalid"}">${msg+num}</p>`
  inputBox.value = "";
  return
})
