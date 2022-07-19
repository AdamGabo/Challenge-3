// Assignment code here
//Character variables 
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "~`!@#$%^&*()-_+={}[]|\"/:;\'\\<>,.?"



var Characters = {
  upperCharaters: 
}


function generatePassword(){
  var length = 8,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  pasVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
  pasVal += charset.charAt(Math.floor(Math.random() * n));
}
console.log(pasVal)
return pasVal;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
