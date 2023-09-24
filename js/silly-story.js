// VARIABLE DECLARATIONS
var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Donald Trump", "Jackie Chan", "Santa Claus"];
var insertY = ["Area 51", "Death Valley", "Aruba"];
var insertZ = ["spontaneously combusted", "rapidly sublimated", "evaporated instantly"];

// FUNCTIONS

// Step 2: This function returns a random value from an array.
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Step 6: This function generates the random story.
function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    // Step 7: Get the value of the custom name input field and remove leading/trailing spaces.
    var customNameValue = customName.value.trim();

    // Step 8: Check if a custom name is entered, and if so, replace "Bob" with the custom name.
    if (customNameValue !== "") {
        newStory = newStory.replace(/Bob/g, customNameValue);
    }

    if (document.getElementById("metric").checked) {
        var weight = Math.round(300 * 0.453592); // Convert pounds to kilograms
        var temp = Math.round(((94 - 32) * 5) / 9); // Convert Fahrenheit to Celsius
        newStory = newStory.replace("94 fahrenheit", temp + " Celsius");
        newStory = newStory.replace("300 pounds", weight + " kilograms");
    }

    // Step 13: Set the text content of the story paragraph and make it visible.
    story.textContent = newStory;
    story.style.visibility = "visible";
}

// EVENT LISTENERS
// Step 5: Add a click event listener to the randomize button to run the result() function.
randomize.addEventListener("click", result);
