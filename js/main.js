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
    container.innerHTML = "";

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
  container.innerHTML = "";
  for (let i = 0; i < babyNames.length; i++) {
    container.innerHTML += `<p>${babyNames[i]}</p>`;
  }
  nameCountSpan.innerHTML = `${babyNames.length}`;

  nameCountSpan.innerHTML = babyNames.length;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  let targetLetter = prompt("Please enter starting letter:");

  let count = [];
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i][0] === targetLetter) {
      container.innerHTML += "<p>" + babyNames[i] + "</p>";
      count.push(babyNames[i]);
    }
  }
  nameCountSpan.innerHTML = count.length;
}

// Display Names with Exact Length
function searchExactLength() {
  let targetLength = +prompt(
    "Please enter the exact length of names to display:"
  );
  let count = [];
  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].length === targetLength) {
      container.innerHTML += "<p>" + babyNames[i] + "</p>";
      count.push(babyNames[i]);
    }
  }
  nameCountSpan.innerHTML = count.length;
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  let min = +prompt("Please enter the minimum length of names to display:");
  let max = +prompt("Please enter the maximum length of names to display:");
  let count = 0;

  for (let i = 0; i < babyNames.length; i++) {
    if (babyNames[i].length >= min && babyNames[i].length <= max) {
      container.innerHTML += `<p>${babyNames[i]}</p>`;
      count++;
    }
  }

  nameCountSpan.innerHTML = count;
}
