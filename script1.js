// External JavaScript
console.log("This message is from External JavaScript!");

// Declare variables
var username1 = "Kavya";
let userage = 22;
let usercity = "Hyderabad";

// Update city variable
usercity = "Vijayawada";

console.log("Updated Information:");
console.log("Name:", username1);
console.log("Age:", userage);
console.log("City:", usercity);

// Display result on webpage
document.getElementById("externalOutput").innerHTML =
  "Name: " + username1 + "<br>" +
  "Age: " + userage + "<br>" +
  "Updated City: " + usercity;

