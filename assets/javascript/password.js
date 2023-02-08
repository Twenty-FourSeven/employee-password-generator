// variables

var CharLength = 8;

//arrays to store possible symbols and letters for password when password is generated

var selectArray = [];

var numbersArray = [];


//special characters, lowercase, uppercase, and numbers available for employee to choose from
var specialChar = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "'",
  ".",
];

var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// call the generate password button to work
function generatePassword() {
  var password = "";
  var tempCharacters = "";

  //ask employee to choose a password 8-128 characters in length
  var pwLength = prompt(
    "How long would you like your password to be? Please choose a value between 8 and 128 characters."
  );

  //while loop--if password length is less than 8 or greater than 128 characters, then alert employee to choose a number between 8 and 128 characters in length
  while (pwLength < 8 || pwLength > 128) {
    alert("Please choose a number between 8 and 128");
    pwLength = prompt(
      "Between 8 and 128 characters, how long would you like your password to be?"
    );
  }

  //ask employee if they would like uppercase, lowercase, numbers, or special characters in their password
  var wantsUpper = confirm("Would you like uppercase letters?");
  if (wantsUpper) {
    tempCharacters += upperCaseArray.join("");
  }
  //console.log(tempCharacters);

  var wantsLower = confirm("Would you like lowercase letters?");
  if (wantsLower) {
    tempCharacters += lowerCaseArray.join("");
  }
  //console.log(tempCharacters);

  var wantsNumbers = confirm("Would you like numbers?");
  if (wantsNumbers) {
    tempCharacters += numbers.join("");
  }
  //console.log(tempCharacters);

  var wantsSpecialCharacters = confirm("Would you like special characters?");
  if (wantsSpecialCharacters) {
    tempCharacters += specialChar.join("");
  }
  //console.log(tempCharacters)

  // while loop--if employee does not choose any of the options, then notify them that they must choose at least one type of character.
  while (
    !wantsUpper &&
    !wantsLower &&
    !wantsNumbers &&
    !wantsSpecialCharacters
  ) {
    alert("Please choose at least one type of character.");
    wantsUpper = confirm("Would you like uppercase letters?");
    if (wantsUpper) {
      tempCharacters += upperCaseArray.join("");
    }
    //console.log(tempCharacters)

    wantsLower = confirm("Would you like lowercase letters?");
    if (wantsLower) {
      tempCharacters += lowerCaseArray.join("");
    }
    //console.log(tempCharacters)

    wantsNumbers = confirm("Would you like numbers?");
    if (wantsNumbers) {
      tempCharacters += numbers.join("");
    }
    //console.log(tempCharacters)

    wantsSpecialCharacters = confirm("Would you like special characters?");
    if (wantsSpecialCharacters) {
      tempCharacters += specialChar.join("");
    }
    //console.log(tempCharacters)
  }
  
  //for loop--loops for the same number of times as the number of characters employee wants in their password. math.floor and math.random create random numbers or characters based on inputs chosen by employee.   
  for (var i = 0; i < pwLength; i++) {
    password += tempCharacters.charAt(
      Math.floor(Math.random() * tempCharacters.length)
    );
  }
  // returning password
  return password;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
