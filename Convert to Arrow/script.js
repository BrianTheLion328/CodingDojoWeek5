document.getElementById("button").onclick = () => {
  setBackgroundColorById("paragraph", "blue");
};

document.getElementById("alert").onclick = () => {
  alert(document.getElementById("popup-input").value);
};

document.getElementById("hover-this").onmouseover = () => {
  setBackgroundColorById("body", "red");
};

document.getElementById("hover-this").onmouseout = () => {
  setBackgroundColorById("body", "white");
};

// CONVERT ALL FUNCTIONS TO ARROW FUNCTIONS

//FUNCTION 1

// Original function below

// function getValueFromId(id) {
//   return document.getElementById(id).value;
// }

// Rewritten as an Arrow Function below

const getValueFromId = id => document.getElementById(id).value


// FUNCTION 2

// Original function below

// function setBackgroundColorById(id, color) {
//   document.getElementById(id).style = "background-color: " + color;
// }

// Rewritten as an Arrow Function below

const setBackgroundColorById = (id, color) => document.getElementById(id).style = "background-color: " + color;


//FUNCTION 3

// Original function below

// function mouseOverFunction(el) {
//   el.style = "background-color: black";
// }

// Rewritten as an Arrow Function below

const mouseOverFunction = el => el.style = "background-color: black";
