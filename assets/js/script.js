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

var generatePassword = function() {

  // set password length based on user input
  var setLength = function() {
    var length = window.prompt("How many characters should your password have?");
    // validate user input
    if (length < 8 || length > 128 || isNaN(length) || length - Math.floor(length) != 0) {
      window.alert("Please choose a whole number between 8 and 128.");
      setLength();
    } else {
      return length;
    };
  };
  var length = setLength();
  console.log("User chose a password length of " + length + ".");

  // set character types based on user input
  var setCharTypes = function() {
    charTypes = [];
    
    // ask user to include lowercase characters
    var inclLowercase = window.confirm('Should your password include lowercase letters? Select "OK" to include or "CANCEL" to exclude.');
    if (inclLowercase) {
      charTypes.push("abcdefghijklmnopqrstuvwxyz")
    };

    // ask user to include uppercase characters
    var inclUppercase = window.confirm('Should your password include uppercase letters? Select "OK" to include or "CANCEL" to exclude.');
    if (inclUppercase) {
      charTypes.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    };

    // ask user to include numbers
    var inclNumbers = window.confirm('Should your password include numbers? Select "OK" to include or "CANCEL" to exclude.');
    if (inclNumbers) {
      charTypes.push("0123456789")
    };

    // ask user to include special characters
    var inclSpecial = window.confirm('Should your password include special characters? Select "OK" to include or "CANCEL" to exclude.');
    if (inclSpecial) {
      charTypes.push("`~!@#$%^&*()-_=+[]{}|;:',.<>?/ ")
    };

    // if user rejects all character types, reprompt
    if (charTypes.length === 0) {
      window.alert("Please choose at least one type of character to include in your password.");
      setCharTypes();
    }
  };
  setCharTypes();

    
  // randomize each character of password one at a time
  var password = "";
  for (i = 0; i < length; i++) {
    // generate random number between 0 and the number of items in charTypes array
    charTypeSelector = Math.floor(Math.random() * charTypes.length);
    // use random number to select set of characters based on index position
    charTypeSelected = charTypes[charTypeSelector];
    // generate random number between 0 and the number of characters in the selected item's string length
    charSelector = Math.floor(Math.random() * (charTypeSelected.length));
    // use random number to select a single character from string and add it to end of password
    password += charTypeSelected.charAt(charSelector);
  }

  return password;
};