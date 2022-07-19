// Assignment code here
// Variables 
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "0123456789";
var specialCharacters = "~`!@#$%^&*()-_+={}[]|\"/:;\'\\<>,.?";
var lowercaseBool; 
var uppercaseBool; 
var numericalBool; 
var specialBool; 
var lowercaseEntry; 
var uppercaseEntry; 
var specialEntry; 
var numericalEntry; 
var length;


function generatePassword(){
//GATHER THE OPTIONS WITH DO WHILE LOOPS 
do {
  var lengthStr = window.prompt("Please enter a total character amount between (8 - 128) for your password");
  length = parseInt(lengthStr); 
}
while (length < 8 || length > 128)
console.log(length);

window.alert("Please select the select the character types you would like to include in your password");
do {
lowercaseEntry = window.prompt("Lowercase? Please enter YES or NO");
lowercaseEntry = lowercaseEntry.toUpperCase(); 
if (lowercaseEntry == "YES")
{
  lowercaseBool = true; 
}
else if (lowercaseEntry == "NO")
{
  lowercaseBool = false; 
}
}
while(lowercaseEntry!= "YES" && lowercaseEntry != "NO")
console.log(lowercaseBool);

do {
  uppercaseEntry = window.prompt("Uppercase? Please enter YES or NO");
  uppercaseEntry = uppercaseEntry.toUpperCase(); 
  if (uppercaseEntry == "YES")
  {
    uppercaseBool = true; 
  }
  else if (uppercaseEntry == "NO")
  {
    uppercaseBool = false; 
  }
}
while(uppercaseEntry!= "YES" && uppercaseEntry != "NO")
console.log(uppercaseBool);

do {
  specialEntry = window.prompt("Special Characters? Please enter YES or NO");
  specialEntry = specialEntry.toUpperCase(); 
  if (specialEntry == "YES")
  {
    specialBool = true; 
  }
  else if (specialEntry == "NO")
  {
    specialBool = false; 
  }
}
while(specialEntry!= "YES" && specialEntry != "NO")
console.log(specialBool);

do {
  numericalEntry = window.prompt("Numbers? Please enter YES or NO");
  numericalEntry = numericalEntry.toUpperCase(); 
  if (numericalEntry == "YES")
  {
    numericalBool = true; 
  }
  else if (numericalEntry == "NO")
  {
    numericalBool = false; 
  }
}
while(numericalEntry!= "YES" && numericalEntry != "NO")
console.log(numericalBool);

//Add the char needed
var charset = ""; 
if (numericalBool == true)
{
    charset += numericCharacters;
}
if (specialBool == true)
{
    charset += specialCharacters;
}
if (uppercaseBool == true)
{
    charset += upperCharacters;
}
if (lowercaseBool == true)
{
    charset += lowerCharacters;
}
//for loop witch selects the password
var passwordVal = "";
for (var i = 0, n = charset.length; i < length; i++) {
  passwordVal += charset.charAt(Math.floor(Math.random() * n));
}

console.log(passwordVal)
return passwordVal;
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
