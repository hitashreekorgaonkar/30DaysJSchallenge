// DOM manipulation (Document Object Model)
// This  in JavaScript involves changing the structure, style, and content of web pages.

// Selecting and Manipulating Elements
var textChange = document.getElementById("career");
textChange.textContent = "careers@update.in";

var bckgColor = document.querySelector(".pOne");
bckgColor.style.backgroundColor = "skyBlue";

// Creating and Appending Elements
var newDiv = document.createElement("div");
newDiv.textContent = "This div is created by DOM";
var t = document.getElementById("info");
t.appendChild(newDiv);
// document.body.appendChild(newDiv);

var newLi = document.createElement("li");
newLi.textContent = "This is a new list item from Dom";
var ul = document.getElementById("myList");
ul.appendChild(newLi);

// Removing Elements
var eleToRemove = document.querySelector(".pTwo");
eleToRemove.remove(eleToRemove);
// eleToRemove.parentNode.removeChild(eleToRemove);

var loremDiv = document.getElementById("lorem");
var lastChild = loremDiv.lastElementChild;
loremDiv.removeChild(lastChild);

// Modifying Attributes and Classes
// and Event Handling

var imgEle = document.getElementById("natureImg");
imgEle.src = "https://picsum.photos/id/648/800/550";

// Ensure DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
// Select the element by its id
var myElement = document.getElementById("myElement");
// Add the 'highlight' class immediately
myElement.classList.add("highlight");

// Remove the 'highlight' class after 3 seconds
setTimeout(function () {
  myElement.classList.remove("highlight");
}, 3000);

// Select the buttons by their ids
var addClassButton = document.getElementById("addClass");
var removeClassButton = document.getElementById("removeClass");

// Add the 'highlight' class when the 'Add Class' button is clicked
addClassButton.addEventListener("click", () => {
  myElement.classList.add("highlight");
  myElement.textContent = "The text content has been changed!";
});

// Remove the 'highlight' class when the 'Remove Class' button is clicked
removeClassButton.addEventListener("click", () =>
  myElement.classList.remove("highlight")
);
// });

// mouseover and mouseout
var element = document.getElementById("borderColorChange");
// Define the function to change the border color on mouseover
function changeBorderColor() {
  element.style.borderColor = "red"; // Change the border color to red
}

// Define the function to reset the border color on mouseout
function resetBorderColor() {
  element.style.borderColor = "blue"; // Reset the border color to black
}

// Attach the mouseover and mouseout event listeners to the element
element.addEventListener("mouseover", changeBorderColor);
element.addEventListener("mouseout", resetBorderColor);
