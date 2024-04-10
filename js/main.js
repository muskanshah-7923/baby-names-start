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
  container.innerHTML = "Display Starting Letter";

  let targetLetter = prompt("Please enter starting letter:");

  for (let i = 0; i < babyNames.length; i++) {
    if (targetLetter === 0) {
      return babyNames[i].length.innerHTML;
    } else {
      return [];
    }
  }
  nameCountSpan.innerHTML = `${babyNames.length}`;
}

// Display Names with Exact Length
function searchExactLength() {
  container.innerHTML = "Display Exact Length";
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  container.innerHTML = "Display Range Length";
}
