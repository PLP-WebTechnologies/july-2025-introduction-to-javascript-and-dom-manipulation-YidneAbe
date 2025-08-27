
// ==================== Part 1: Custom Functions ====================
function changeMessage() {
  // DOM Interaction #1: Change inner text
  document.getElementById("message").innerText = "Text changed with a function!";
}

function addListItem() {
  // DOM Interaction #2: Create new list item
  let newItem = document.createElement("li");
  newItem.innerText = "New Item";
  document.getElementById("list").appendChild(newItem);
}


// ==================== Part 4: DOM Interactions ====================
// DOM Interaction #3: Change title style
document.getElementById("title").style.color = "blue";

// Event listeners to call our custom functions
document.getElementById("changeBtn").addEventListener("click", changeMessage);
document.getElementById("addItemBtn").addEventListener("click", addListItem);

