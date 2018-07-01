function showPassword() {
    var passwordVal = document.getElementById("pass1");

    if (passwordVal.type === "password") 
    {
        passwordVal.type = "text";
    } 
    else 
    {
        passwordVal.type = "password";
    }
    var passwordVal2 = document.getElementById("pass2");
    if (passwordVal2.type === "password") 
    {
        passwordVal2.type = "text";
    } 
    else 
    {
        passwordVal2.type = "password";
    }
}

var passwordMessage = document.getElementById('pass1');

// When the user clicks on the password field, show the message box
passwordMessage.onfocus = function() 
{
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
passwordMessage.onblur = function() 
{
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
function validatePassword(firstPass)
{
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var special = document.getElementById("special");

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  var upperCaseBool = true;
  var numberBool = true;
  var lengthBool = true;
  var specialCharBool = true;

  if(firstPass.value.match(upperCaseLetters)) 
  { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    upperCaseBool = true;
  } 
  else 
  {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    upperCaseBool = false;
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(firstPass.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
    numberBool = true;
  } 
  else 
  {
    number.classList.remove("valid");
    number.classList.add("invalid");
    numberBool = false;
  }

  // Validate length
  if(firstPass.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    lengthBool = true;
  } 
  else 
  {
    length.classList.remove("valid");
    length.classList.add("invalid");
    lengthBool = false;
  }

  // Validate special chars
  var specialChars = /[ !"#$%&'()*+,-./:;<=>?@[\]^`_{}|~]/g;
  if(firstPass.value.match(specialChars)) 
  {
    special.classList.remove("invalid");
    special.classList.add("valid");
    specialCharBool = true;
  } 
  else 
  {
    special.classList.remove("valid");
    special.classList.add("invalid");
    specialCharBool = false;
  }

  var message = document.getElementById('errPassInput');
  if ((specialCharBool == true) && (numberBool == true) && (upperCaseBool == true) && (lengthBool == true))
  {
    message.innerHTML = "<span class='valid'>Password is Valid<br></span>";
    return true;
  }
  else
  {
    message.innerHTML = "<span class='warning'>Password does not meet criteria!<br></span>"
    return false;
  }
}

function checkPass()
{
  //Store the password field objects into variables ...
  var pass1 = document.getElementById('pass1');
  var pass2 = document.getElementById('pass2');
  //Store the Confimation Message Object ...
  var message = document.getElementById('confirmMessage');
  //Set the colors we will be using ...
  var goodColor = "#129017";
  var badColor = "#ff6666";
  var goodBackground = "white";

  //Compare the values in the password field 
  //and the confirmation field
  if (pass2.value == "")
  {
    //Currently no input for pass2
    pass2.style.backgroundColor = goodBackground;
    message.style.color = goodColor;
    message.innerHTML = "";
    return false;
  }
  else if(pass1.value == pass2.value)
  {
    //The passwords match. 
    //Set the color to the good color and inform
    //the user that they have entered the correct password 
    pass2.style.backgroundColor = goodBackground;
    message.style.color = goodColor;
    message.innerHTML = "Passwords Match"
    return true;
  }
  else
  {
    //The passwords do not match.
    //Set the color to the bad color and
    //notify the user.
    pass2.style.backgroundColor = badColor;
    message.style.color = badColor;
    message.innerHTML = "<span class='warning'>Passwords Do Not Match!</span>"
    return false;
  }
} 

function validatephone(phone) 
{
  var maintainplus = '';
  var numval = phone.value
  if ( numval.charAt(0)=='+' )
  {
      var maintainplus = '';
  }
  curphonevar = numval.replace(/[\\A-Za-z!"£$%^&\,*+_={};:'@#~,.Š\/<>?|`¬\]\[]/g,'');
  phone.value = maintainplus + curphonevar;
  var maintainplus = '';
  phone.focus;
}

// validates text only
function validateName(txt) 
{
  txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g-, '');
}

// validates text only
function validateUsername(txt)
{
    var letters = /^[0-9a-zA-Z]+$/;
    var matched = alphaNumeric(txt);

    if(txt.value.length < 6)
    {
      document.getElementById("errUser").innerHTML = "<span class='warning'>Username must be at least 6 characters</span>";
      return false;
    } 
    else if(matched == false)
    {
      document.getElementById("errUser").innerHTML = "<span class='warning'>Username can only use numbers, letters, or underscore</span>";
      return false;
    }
    else
    {
      document.getElementById("errUser").innerHTML = "<span class='valid'>Username is Available</span>"; 
      return true;
    }
}

function alphaNumeric(inputTxt)
{
  var letters = /^[0-9a-zA-Z_]+$/;
  
  if(inputTxt.value.match(letters))
  {
    return true;
  }
  else
  {
    return false;
  }
}

// validate email
function email_validate(email)
{
  var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

  if(regMail.test(email) == false)
  {
    document.getElementById("status").innerHTML = "<span class='warning'>Email address is not valid yet.</span>";
    return false;
  }
  else
  {
    document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>"; 
    return true;
  }
}

// validate date of birth
function dob_validate(dob)
{
  var regDOB = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;

  if(regDOB.test(dob) == false)
  {
      document.getElementById("statusDOB").innerHTML  = "<span class='warning'>DOB is only used to verify your age.</span>";
  }
  else
  {
      document.getElementById("statusDOB").innerHTML  = "<span class='valid'>Thanks, you have entered a valid DOB!</span>";   
  }
}

// validate address
function add_validate(address)
{
  var regAdd = /^(?=.*\d)[a-zA-Z\s\d\/]+$/;
  
  if(regAdd.test(address) == false)
  {
      document.getElementById("statusAdd").innerHTML  = "<span class='warning'>Address is not valid yet.</span>";
  }
  else
  {
      document.getElementById("statusAdd").innerHTML  = "<span class='valid'>Thanks, Address looks valid!</span>";    
  }
}

 document.getElementById("field_terms").setCustomValidity("Please indicate that you accept the Terms and Conditions");

 function checkValues()
 {
  var submitValue = false;
  var confirmPass2 = checkPass();
  var firstPass = document.getElementById('pass1');
  var confirmPass = validatePassword(firstPass);
  var emailVar = document.getElementById('email');
  var confirmEmail = email_validate(emailVar.value);
  var username = document.getElementById('user');
  var confirmUser = validateUsername(username);
  var initialName = document.getElementById('firstName');
  var secondName = document.getElementById('lastName');
  var confirmName = false;

  if ((initialName.value.length > 0) && (secondName.value.length > 0))
  {
    confirmName = true;
  }
  else
  {
    if (initialName.value.length == 0)
    {
      document.getElementById("errFirst").innerHTML = "<span class='warning'>Please enter a first name</span>";
    }
    else
    {
      document.getElementById("errFirst").innerHTML = "";
    }
    if (secondName.value.length == 0)
    {
      document.getElementById("errLast").innerHTML = "<span class='warning'>Please enter a last name</span>";
    }
    else
    {
      document.getElementById("errLast").innerHTML = "";
    }
  }

  if ((confirmPass == true) & (confirmPass2 == true) & (confirmEmail == true) & (confirmUser == true) & (confirmName == true))
  {
    submitValue = true;
  }

  return submitValue;
 }