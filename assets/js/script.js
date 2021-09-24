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
    // validate user inputed length
    if (length < 8 || length > 128 || isNaN(length) || length - Math.floor(length) != 0) {
      window.alert("Please choose a whole number between 8 and 128.");
      return setLength();
    } else {
      return length;
    };
  };
  var length = setLength();
  console.log("User chose a password length of " + length + ".");

  // randomize each character of password one at a time
  var password = "";
  for (i = 0; i < length; i++) {
    password = password.concat(Math.floor(Math.random() * 10));
    console.log(password);
  }

  return password;
};