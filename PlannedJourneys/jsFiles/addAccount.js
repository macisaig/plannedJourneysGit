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

var firstPass = document.getElementById('pass1');
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var special = document.getElementById("special");

// When the user clicks on the password field, show the message box
firstPass.onfocus = function() 
{
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
firstPass.onblur = function() 
{
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
firstPass.onkeyup = function() 
{
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(firstPass.value.match(upperCaseLetters)) 
  { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else 
  {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(firstPass.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else 
  {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(firstPass.value.length >= 6) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else 
  {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  // Validate special chars
  var specialChars = /[ !"#$%&'()*+,-./:;<=>?@[\]^`_{}|~]/g;
  if(firstPass.value.match(specialChars)) 
  {
    special.classList.remove("invalid");
    special.classList.add("valid");
  } 
  else 
  {
    special.classList.remove("valid");
    special.classList.add("invalid");
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
    if (pass2.value == ""){
        //Currently no input for pass2
        pass2.style.backgroundColor = goodBackground;
        message.style.color = goodColor;
        message.innerHTML = "";
    }
    else if(pass1.value == pass2.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass2.style.backgroundColor = goodBackground;
        message.style.color = goodColor;
        message.innerHTML = "<strong>Passwords Match</strong>"
    }
    else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "<span class='warning'>Passwords Do Not Match!</span>"
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
    txt.value = txt.value.replace(/[^a-zA-Z-'\n\r.]+/g, '');
}

// validates text only
function validateUsername(txt) {
    var letters = /^[0-9a-zA-Z]$/;

    if(txt.value.length < 6)
    {
        document.getElementById("errUser").innerHTML = "<span class='warning'>Username must be at least 6 characters</span>";
    } 
    else if(letters.test(txt) == false)
    {
        document.getElementById("errUser").innerHTML = "<span class='warning'>Username can only use numbers, letters, or underscore</span>";
    }
    else
    {
        document.getElementById("errUser").innerHTML = "<span class='valid'>Username is Available</span>"; 
    }
}

// validate email
function email_validate(email)
{
    var regMail = /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;

    if(regMail.test(email) == false)
    {
        document.getElementById("status").innerHTML    = "<span class='warning'>Email address is not valid yet.</span>";
    }
    else
    {
        document.getElementById("status").innerHTML = "<span class='valid'>Thanks, you have entered a valid Email address!</span>"; 
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