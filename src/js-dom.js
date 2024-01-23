// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

const loginButton = document.querySelector("#auth");
loginButton.addEventListener("click", function () {
  if (loginButton.textContent === "Log in") {
    loginButton.textContent = "Log out";
  } else {
    loginButton.textContent = "Log in";
  }
});

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const submitBtn = document.querySelector("#submitbtn");

submitBtn.addEventListener("click", () => {
  alert("Your message here");
});

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-click to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has double clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

const list = document.querySelector("#list");
const button = document.querySelector("#adder");

button.addEventListener("dblclick", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "Item";
  list.appendChild(newItem);
});

// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

const changeColors = document.querySelectorAll(".changes-colors");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");

document.body.addEventListener("click", (event) => {
  if (event.target === redBtn) {
    changeColors.forEach((element) => {
      element.style.color = "red";
    });
  } else if (event.target === blueBtn) {
    changeColors.forEach((element) => {
      element.style.color = "blue";
    });
  }
});

// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

const factorialBtn = document.querySelector("#factorialize");
const resultSpan = document.querySelector("#result");

factorialBtn.addEventListener("click", () => {
  const numInput = document.querySelector("#factorial-input").value;

  const num = parseInt(numInput);
  if (isNaN(num) || num < 0 || num !== Math.floor(num)) {
    resultSpan.textContent = "Please enter a valid positive integer.";
  } else {
    const result = factorialize(num);
    resultSpan.textContent = `Factorial: ${result}`;
  }
});

function factorialize(num) {
  let total = 1;
  if (num === 0 || num === 1) return 1;

  while (num > 1) {
    total *= num;
    num--;
  }
  return total;
}

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..

const form = document.querySelector("#recommend-word");
const textarea = document.querySelector("#word");
const feedback = document.querySelector(".form-feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (textarea.value.length >= 4) {
    feedback.textContent = "Thanks for your submission!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "The word must be at least 4 characters long.";
    feedback.style.color = "red";
  }
});
