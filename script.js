// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Variables for password type

var LOWERCASE_CHAR_CODES = charArray(97, 122)
var UPPERCASE_CHAR_CODES = charArray(65, 90)
var NUMBER_CHAR_CODES = charArray(48, 57)
var SYMBOL_CHAR_CODES = charArray(33, 47).concat(charArray(58, 64)).concat(charArray(91, 96)).concat(123, 126)

function charArray(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(String.fromCharCode(i))
  }
  return array
}

  function generatePassword() {

    var length = parseInt(prompt("Please select a password length between 8 and 128 characters"));
  
    if (length === NaN) {
      alert(length + " is not a valid entry. Please enter a number between 8 and 128 to continue.");
      return "";
    } else if ( length < 8 || length > 128 ) {
      alert("Password length must be between 8 and 128 character. Please select a number within that range.");
      return "";
    }
    
    var lowercase = confirm("Do you want the password to contain lowercase letters?");
    var uppercase = confirm("Do you want the password to contain uppercase letters?");
    var numeric = confirm("Do you want the password to contain numbers?");
    var symbols = confirm("Do you want the password to contain special characters?");


    var userSelection = [];
    console.log(LOWERCASE_CHAR_CODES);
    if (lowercase) {
      userSelection = userSelection.concat(LOWERCASE_CHAR_CODES);
    }

    if (uppercase) {
      userSelection = userSelection.concat(UPPERCASE_CHAR_CODES);
    }

    if (numeric) {
      userSelection = userSelection.concat(NUMBER_CHAR_CODES);
    }

    if (symbols) {
      userSelection = userSelection.concat(SYMBOL_CHAR_CODES);
    }
    
    var selectionString = userSelection;
    console.log(userSelection);
    var password = "";
    
      for (let i = 0; i < length; i++){
        
        password += selectionString[Math.floor(Math.random() * selectionString.length)];
      }
      return password
}

