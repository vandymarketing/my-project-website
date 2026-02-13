// This function runs as soon as the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("Your script.js is successfully linked!");

    // Example 1: Change the title color when clicked
    const heading = document.querySelector("h1");
    heading.addEventListener("click", function() {
        heading.style.color = "blue";
    });

    // Example 2: Log a message when the button is clicked
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        console.log("Button was clicked!");
    });
});
