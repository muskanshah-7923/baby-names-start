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
  container.innerHTML = "Display All: <p>
Olivia
Emma
Amelia
Ava
Sophia
Isabella
Luna
Mia
Charlotee
Harper
Evelyn
Ella
Scarlett
Aurora
Gianna
Nova
Aria
Mila
Sofia
Ellie
Violet
Willow
Layla
Lily
Camila
Hazel
Avery
Chloe
Penelope
Elena
Isla
Eliana
Eleanor
Abigail
Elizabeth
Nora
Ivy
Riley
Grace
Emily
Paisley
Zoey
Emilia
Stella
Everly
Maya
Leilani
Athena
Naomi
Lucy
Noah
Liam
Oliver
Elijah
Gold
Lucas
Mateo
Levi
Asher
Ethan
James
Luca
Leo
Grayson
Aiden
Ezra
Benjamin
Henry
Sebastian
Wyatt
Owen
Mason
Jackson
Jack
Daniel
Alexander
Hudson
Kai
Gabriel
Muhammad
William
Carter
Maverick
Logan
Michael
Samuel
Ezekiel
Jayden
Luke
Josiah
Lincoln
David
Theo
Julian
Elias
Jacob
Theodore
Matthew
Waylon
Jaxon " </p>;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  container.innerHTML = "Display Starting Letter";
}

// Display Names with Exact Length
function searchExactLength() {
  container.innerHTML = "Display Exact Length";
}

// Display Names within a Range of Lengths
function searchRangeLength() {
  container.innerHTML = "Display Range Length";
}
