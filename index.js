const dateOFBirth = document.querySelector("#date-of-birth");
const luckyNum = document.querySelector("#lucky-no");
const clickButton = document.querySelector("#button-click");
const outputEl = document.querySelector("#output-birthday")

clickButton.addEventListener("click",birthdayLucky)

function birthdayLucky(){
  const dob = dateOFBirth.value;
  const dateSum = calculateSum(dob)
  compareDobWithLuckno(dateSum,luckyNum.value)
}

function compareDobWithLuckno(sum,luckyNum){
  if( sum % luckyNum === 0){
    outputEl.innerHTML="Birthday is lucky";
  }
  else{
    outputEl.innerHTML="Birthday is not lucky";
  }
}

function calculateSum(dob){
dob = dob.replaceAll("-","");
let sum = 0;
for(let index in dob){
sum = sum +  Number(dob.charAt(index));
}
return sum
}