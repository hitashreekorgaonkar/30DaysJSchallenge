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
var list = document.getElementById("myList");
list.appendChild(newLi);

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

// mouseover and mouseout & Mouse Events
var element = document.getElementById("borderColorChange");
// Define the function to change the border color on mouseover
function changeBorderColor() {
  element.style.borderColor = "red"; // Change the border color to red
  element.style.background = "lightyellow"; // Change the background color to lightyellow
}

// Define the function to reset the border color on mouseout
function resetBorderColor() {
  element.style.borderColor = "blue"; // Reset the border color to blue
  element.style.background = "orange"; // Reset the background color to orange
}

// Attach the mouseover and mouseout event listeners to the element
element.addEventListener("mouseover", changeBorderColor);
element.addEventListener("mouseout", resetBorderColor);

imgEle.addEventListener("dblclick", function () {
  // Toggle the visibility of the image
  if (imgEle.style.display === "none") {
    imgEle.style.display = "block";
  } else {
    imgEle.style.display = "none";
  }
});

// Keyboard Events

const input = document.getElementById("myInput");
const output = document.getElementById("output");

// Add a keydown event listener to the input field
input.addEventListener("keydown", function (event) {
  // Log the key pressed to the console
  console.log(`Key pressed: ${event.key}`);
});
// Add a keyup event listener to the input field
input.addEventListener("keyup", function () {
  // Display the current value of the input field in the paragraph
  output.textContent = "Current value: " + input.value;
});

// Form Events
const form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
  // Create a FormData object from the form
  const formData = new FormData(form);
  // Convert the FormData object to an object to log it
  const formObject = {};
  console.log("formData", formData);
  formData.forEach((value, key) => {
    console.log(value);
    console.log("key", key);
    console.log("formObject", formObject);
    formObject[key] = value;
    console.log("formObject[key]", formObject[key]);
  });
  // Log the form data to the console
  console.log("Form data:", formObject);
});

const selectElement = document.getElementById("mySelect");
const displayParagraph = document.getElementById("displayParagraph");
selectElement.addEventListener("change", () => {
  // Get the selected value
  const selectedValue = selectElement.value;
  // Display the selected value in the paragraph
  displayParagraph.textContent = `Selected value: ${selectedValue}`;
});

// Event Delegation
list.addEventListener("click", (event) => {
  // Check if the clicked element is a list item
  if (event.target && event.target.nodeName === "LI") {
    // Log the text content of the clicked list item
    console.log("Clicked item:", event.target.textContent);
  }
});

const parentElement = document.getElementById("parentElement");
// Add event listener to the parent element
parentElement.addEventListener("click", (event) => {
  // Check if the clicked element is a dynamically added child element
  if (event.target && event.target.classList.contains("child")) {
    // Log the text content of the clicked child element
    console.log("Clicked child element:", event.target.textContent);
  }
});
// Function to add a new child element
const addChildElement = () => {
  const newChild = document.createElement("div");
  newChild.classList.add("child");
  newChild.textContent = "I am a dynamically added child element";
  parentElement.appendChild(newChild);
};

// Add event listener to the button to add a new child element
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addChildElement);
