// variables

var CharLength = 8;


//arrays to store all possible symbols and letters for password when password is generated 

var selectArray = [];

var numbersArray = [];

var specialChar = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '[', ']', '{', '}', '|', '\', '/',  ';', ':', '<', '>', '?', '.', ',', ''' ];


var lowerCaseArray = [];

var upperCaseArray = [];




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
