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
  if (lengthStr === null) // if the user hits cancel break out of the loop 
  return; 
  length = parseInt(lengthStr) || 0; //convert any non integer value to 0 so while loop can work 
}
while (length < 8 || length > 128)
console.log(length);

window.alert("Please select the select the character types you would like to include in your password");
do {
lowercaseEntry = window.prompt("Lowercase? Please enter YES or NO");

if (lowercaseEntry === null) // if the user hits cancel 
  return; 

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
  if (uppercaseEntry === null) // if the user hits cancel 
  return; 
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
  if (specialEntry === null) // if the user hits cancel 
  return; 
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
  if (numericalEntry === null) // if the user hits cancel 
  return; 
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

//Add the char needed to fit the password criteria
var charset = ""; 
var randomNumber = 0; 
var passwordVal = "";
var charactertypecount = 0; 
if (specialBool == true)
{
    charset += specialCharacters;
    randomNumber = getRandomNumber(1,specialCharacters.length); 
    passwordVal += specialCharacters[randomNumber];  
    charactertypecount++; 
    console.log (passwordVal); 
}
if (numericalBool == true)
{
    charset += numericCharacters;
    randomNumber = getRandomNumber(1,numericCharacters.length); 
    passwordVal += numericCharacters[randomNumber];  
    charactertypecount++; 
    console.log (passwordVal); 
}
if (uppercaseBool == true)
{
    charset += upperCharacters;
    randomNumber = getRandomNumber(1,upperCharacters.length); 
    passwordVal += upperCharacters[randomNumber]; 
    charactertypecount++;
    console.log (passwordVal); 

}
if (lowercaseBool == true)
{
    charset += lowerCharacters;
    randomNumber = getRandomNumber(1,lowerCharacters.length); 
    passwordVal += lowerCharacters[randomNumber]; 
    charactertypecount++; 
    console.log (passwordVal); 
}
if (lowercaseBool == false && numericalBool == false && uppercaseBool == false && specialBool == false) // edge case where they select nothing 
{
  window.alert("Please ensure you select at least one type of character criteria, Please Try Again")
  return; 
}

//Add the the remaining random characters 
for (var i = charactertypecount, n = charset.length; i < length; i++) {
  passwordVal += charset.charAt(Math.floor(Math.random() * n));
}
//shuffle up the characters to increase randomoness 
passwordVal = passwordVal.shuffle(); 

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

//Random Numnber Generator with specified Range 
function getRandomNumber(Min,Max){
  var num = Min + (Math.random() * ((Max - Min) + 1));
  num = Math.floor(num); //make it a whole value 
  return num; 
}
//String Shuffler 
String.prototype.shuffle = function () {
  var str = this.split(""),
      num = str.length;
  for(var a = num - 1; a > 0; a--) {
      var b = Math.floor(Math.random() * (a + 1));
      var temp = str[a];
      str[a] = str[b];
      str[b] = temp;
  }
  return str.join("");
}
