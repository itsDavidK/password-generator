//variables for creating the password
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '?', '-', '_', '+', '=', ',', '.', '<', '>', '~', '|', '[', ']', '{', '}', ';', ':'];
var password = "";
var passwordLength;
//variables to check the user's wants
var isUpper;
var isLower;
var isNumbers;
var isSpecial;

function generatePassword() 
{
  //reset the password
  password = "";
  var passwordArray = [];

  passwordLength = prompt("How many characters do you want in your password between 8-128?")
  if (passwordLength < 8 || passwordLength > 128)
  {
    return password = "Please enter a number between 8 and 128."
  }
  else if (passwordLength >= 8 && passwordLength <= 128)
  {
    isUpper = confirm("Do you want your password to include UPPERCASE letters?");
    isLower = confirm("Do you want your password to include LOWERCASE letters?>");
    isNumbers = confirm("Do you want your password to include NUMBERS?");
    isSpecial = confirm("Do you want your password to include SPECIAL characters?");

    //check if the user selected atleast one of the options.
    if (isUpper == false && isLower == false && isNumbers == false && isSpecial == false)
    {
      return password = "Please select 'OK' for atleast one of the options. "
    }

    if (isUpper)
    {
      passwordArray = passwordArray.concat(upper);
    }

    if (isLower)
    {
      passwordArray = passwordArray.concat(lower);
    }

    if (isNumbers)
    {
      passwordArray = passwordArray.concat(numbers);
    }

    if (isSpecial)
    {
      passwordArray = passwordArray.concat(special);
    }

    for (let i = 0; i < passwordLength; i++)
    {
      password = password + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }

    return password;
  }
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
