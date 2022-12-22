// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector(".card-footer");


// Write password to the #password input
function writePassword() {
  //var passwordText = document.querySelector("#password");
  console.log("I clicked the button");

  // Stores user response in variable
  store = prompt("Please enter your desired password length", "8-128 characters");
  var store1 =Number(store);//True or flase
  console.log(store1);

 // First Condition ------------------------------------------------------------------------
 
 
  while ((isNaN(store1))  ||  (store > 128 || store < 8)) { //isnan true if value is not a number
    alert("Password length must be between 8-128 numerical characters, string input is not accepted");
    var store = prompt("Please enter your desired password length", "8-128 characters");
    store1 =Number(store);//True or flase
    console.log(store1);
  };

 //Second Condition----------------------------------------------------------------------------------------

 var char1 = prompt("Would you like your password to contain lowercase characters", "Yes or No");
 while (char1 !== "Yes" && char1 !== "yes" && char1 !== "No" && char1 !== "no"){
  alert("Please respond with wither Yes or No");
  var char1 = prompt("Would you like your password to contain lowercase characters", "Yes or No");
 }

 //Third Condition----------------------------------------------------------------------------------------

 var char2 = prompt("Would you like your password to contain Uppercase characters", "Yes or No");
 while (char2 !== "Yes" && char2 !== "yes" && char2 !== "No" && char2 !== "no"){
  alert("Please respond with wither Yes or No");
  var char2 = prompt("Would you like your password to contain Uppercase characters", "Yes or No");
 }

 //Fourth Condition----------------------------------------------------------------------------------------

 var char3 = prompt("Would you like your password to contain Numeric characters", "Yes or No");
 while (char3 !== "Yes" && char3 !== "yes" && char3 !== "No" && char3 !== "no"){
  alert("Please respond with wither Yes or No");
  var char3 = prompt("Would you like your password to contain Numeric characters", "Yes or No");
 }

 //Fifth Condition----------------------------------------------------------------------------------------

 var char4 = prompt("Would you like your password to contain Special characters", "Yes or No");
 while (char4 !== "Yes" && char4 !== "yes" && char4 !== "No" && char4 !== "no"){
  alert("Please respond with wither Yes or No");
  var char4 = prompt("Would you like your password to contain Special characters", "Yes or No");
 }

 //Need at least one Yes
 if ((char1 == "No" || char1 =="no") && (char2 == "No" || char2 =="no") && (char3 == "No" || char3 =="no") && (char4 == "No" || char4 =="no")) {
  alert("You must respond with 'Yes' to one of the previous catagories. Please exit and try again");
 } else {
  //You passed the conditions, time to generate Password. 
  console.log("you passed!!")
 }

 generatePassword(Math.round(store),char1, char2,char3,char4);

}

function generatePassword(store, char1, char2, char3, char4){
  console.log(store);
  console.log(char1);
  console.log(char2);
  console.log(char3);
  console.log(char4);
  var charslist=""
  if (char1 == "Yes" || char1 =="yes") {//Do I want lowercase
    charslist += "abcdefghijklmnopqrstuvwxyz";
  } 

  if (char2 == "Yes" || char2 =="yes") {//Do I want uppercase
    charslist += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 

  if (char3 == "Yes" || char3 =="yes") {//Do I want Numeric Characters
    charslist += "0123456789";
  } 
  
  if (char4 == "Yes" || char4 =="yes") {//Do I want Special Characters
    charslist += "!@#$%^&*()";
  } 
  

  var password = "";
  for (var x = 0; x <= store; x++) {
    var Numbers = Math.floor(Math.random() * charslist.length);
    password += charslist.substring(Numbers, Numbers +1);
   }
   console.log(password);
   document.getElementById("password").value = password;
};
// Add event listener to generate button---MAKES IT WORK
generateBtn.addEventListener("click", writePassword);
