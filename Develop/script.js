//variables for creating the password
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '/', '?', '-', '_', '+', '=', ',', '.', '<', '>', '~', '|', '[', ']', '{', '}', ';', ':'];
var result = "";
var passwordLength;
//variables to check the user's wants
var isUpper;
var isLower;
var isNumbers;
var isSpecial;

function generatePassword() 
{
  //reset the password
  result = "";
  var passwordArray = [];

  //check if the user entered a valid number, if not just return a message and don't continue
  passwordLength = prompt("How many characters do you want in your password between 8-128?")
  if (passwordLength < 8 || passwordLength > 128)
  {
    return result = "Please enter a number between 8 and 128."
  }
  //if the user entered a valid number go through the next questions
  else if (passwordLength >= 8 && passwordLength <= 128)
  {
    isUpper = confirm("Do you want your password to include UPPERCASE letters?");
    isLower = confirm("Do you want your password to include LOWERCASE letters?>");
    isNumbers = confirm("Do you want your password to include NUMBERS?");
    isSpecial = confirm("Do you want your password to include SPECIAL characters?");

    //check if the user selected atleast one of the options.
    //if user didn't select anything just return a message to the user and don't continue
    if (isUpper == false && isLower == false && isNumbers == false && isSpecial == false)
    {
      return result = "Please select 'OK' for atleast one of the options. "
    }

    //if the user wants uppercase generate the letters.
    if (isUpper)
    {
      passwordArray = passwordArray.concat(upper);
    }

    //if the user wants lowercase generate the letters.
    if (isLower)
    {
      passwordArray = passwordArray.concat(lower);
    }

    //if the user wants numbers generate the numbers
    if (isNumbers)
    {
      passwordArray = passwordArray.concat(numbers);
    }

    //if the user wants special characters, generate the characters.
    if (isSpecial)
    {
      passwordArray = passwordArray.concat(special);
    }


    //put the characters together to create the password
    for (let i = 0; i < passwordLength; i++)
    {
      result = result + passwordArray[Math.floor(Math.random() * passwordArray.length)];
    }

    return result;
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
