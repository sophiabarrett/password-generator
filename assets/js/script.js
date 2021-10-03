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

  // set password length based on user input and store in variable
  var setLength = function() {
    var inputLength = window.prompt("How many characters should your password have?");
    // validate user input
    if (inputLength < 8 || inputLength > 128 || isNaN(inputLength) || inputLength - Math.floor(inputLength) != 0) {
      window.alert("Please choose a number between 8 and 128.");
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
  var pickedCharTypes = [];
  var pickCharTypes = function() {
    // loop through each item in charTypes and ask user to include or exclude
    for (var i = 0; i < charTypes.length; i++) {
      var include = window.confirm('Should your password include ' + charTypes[i].name +'? Select "OK" to include or "CANCEL" to exclude.');
      // if user chooses to include, add characters to pickedCharTypes array
      if (include) {
        pickedCharTypes.push(charTypes[i].characters);
      }
    }

    // if user rejects all character types, reprompt
    if (pickedCharTypes.length === 0) {
      window.alert("Please choose at least one type of character to include in your password.");
      pickCharTypes();
    }
  };
  pickCharTypes();

  // set password variable to empty
  var password = "";

  // add a single random character to password, then repeat for chosen password length
  for (var i = 0; i < length; i++) {
    // generate random number between 0 and the number of items in pickedCharTypes array
    var charTypeSelector = Math.floor(Math.random() * pickedCharTypes.length);
    // use random number to select set of characters based on index position in pickedCharTypes array
    var selectedCharType = pickedCharTypes[charTypeSelector];
    // generate random number between 0 and the number of characters in the selected character's string length
    var charSelector = Math.floor(Math.random() * (selectedCharType.length));
    // use random number to select a single character from string and add it to end of password
    password += selectedCharType.charAt(charSelector);
  }

  return password;
};