// Baby Names Start
// 2020 Alberta Baby Names
// https://open.alberta.ca/opendata/frequency-and-ranking-of-baby-names-by-year-and-gender

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Baby Names from Text File
let babyNames = await loadTextFile("data/baby-names.txt");

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "exact-length") {
    searchExactLength();
  } else if (selection === "range-length") {
    searchRangeLength();
  }
}

// Display All Characters
function displayAll() {
  for (let i = 0; i < babyNames.length; i++) {
    container.innerHTML += `<br${babyNames[i]}>${babyNames[i]}</br>`;
    nameCountSpan.innerHTML = `${babyNames.length}`;
  }
}

// Display Names with Starting Letter
function searchStartingLetter() {


let startingLetter = prompt("Enter the starting letter of a name:");

// Convert the starting letter to uppercase for case insensitivity
startingLetter = startingLetter.toUpperCase(); // Not necessairy

// Initialize an array to store names starting with the specified letter
let namesStartingWithLetter = [];

// Loop through the baby names array and find names starting with the specified letter
for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].charAt(0).toUpperCase() === startingLetter) {
        namesStartingWithLetter.push(babyNames[i]);
    }
}

// Display the names starting with the specified letter and the number of names found
if (namesStartingWithLetter.length > 0) {
    console.log("Names starting with " + startingLetter + ":");
    for (let j = 0; j < namesStartingWithLetter.length; j++) {
        console.log(namesStartingWithLetter[j]);
    }
    console.log("Number of names found: " + namesStartingWithLetter.length);
} else {
    console.log("No names found starting with " + startingLetter);
}


}

// Display Names with Exact Length
function searchExactLength() {
  container.innerHTML = "Display Exact Length";
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  container.innerHTML = "Display Range Length";
}
