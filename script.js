// // Creating a new div element
// var newDiv = document.createElement("div");
// // Creating a text node
// var newContent = document.createTextNode("hey how are you doing");
// // Adding the text node to the newly created div
// newDiv.appendChild(newContent);
// // Adding the newly created element and its content into the DOM
// var latestDiv = document.getElementById("main");
// document.body.appendChild(newDiv, latestDiv);

//getting new HTML documents
var contents = document.getElementById("main").innerHTML;
console.log("contents", contents);
//setting inner HTML elements
var mainDiv = document.getElementById("main");
mainDiv.innerHTML = "<p>this is newly inserted paragraph</p>";
