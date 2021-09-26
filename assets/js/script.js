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
    var inputLength = window.prompt("How many characters should your password have?");
    // validate user input
    if (inputLength < 8 || inputLength > 128 || isNaN(inputLength) || inputLength - Math.floor(inputLength) != 0) {
      window.alert("Please choose a whole number between 8 and 128.");
      return setLength();
    } else {
      return inputLength;
    };
  };
  var length = setLength();

  // set available character types
  var charTypes = [
    {
      name: "lowercase characters",
      characters: "abcdefghijklmnopqrstuvwxyz"
    },
    {
      name: "uppercase characters",
      characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
      name: "numbers",
      characters: "0123456789"
    },
    {
      name: "special characters",
      characters: "`~!@#$%^&*()-_=+[]{}|;:',.<>?/ "
    }
  ];

  // set character types to use in password based on user input
  var chosenCharTypes = [];
  var chooseCharTypes = function() {
    // loop through each item in charTypes and ask user to include or exclude
    for (var i = 0; i < charTypes.length; i++) {
      var include = window.confirm('Should your password include ' + charTypes[i].name +'? Select "OK" to include or "CANCEL" to exclude.');
      // if user chooses to include, add to chosenCharTypes array
      if (include) {
        chosenCharTypes.push(charTypes[i].characters);
      }
    }

    // if user rejects all character types, reprompt
    if (chosenCharTypes.length === 0) {
      window.alert("Please choose at least one type of character to include in your password.");
      chooseCharTypes();
    }
  };
  chooseCharTypes();

  // randomize each character of password one at a time
  var password = "";
  for (var i = 0; i < length; i++) {
    // generate random number between 0 and the number of items in chosenCharTypes array
    var charTypeSelector = Math.floor(Math.random() * chosenCharTypes.length);
    // use random number to select set of characters based on index position in chosenCharTypes array
    var selectedCharType = chosenCharTypes[charTypeSelector];
    // generate random number between 0 and the number of characters in the selected item's string length
    var charSelector = Math.floor(Math.random() * (selectedCharType.length));
    // use random number to select a single character from string and add it to end of password
    password += selectedCharType.charAt(charSelector);
  }
  return password;
};