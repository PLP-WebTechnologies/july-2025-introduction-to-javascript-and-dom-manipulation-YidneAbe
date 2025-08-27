// ==================== Part 1: Variables and Conditionals ====================
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// ==================== Part 2: Custom Functions ====================
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

// ==================== Part 3: Loops ====================
// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop iteration:", i);
}

// Example 2: While loop
let count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// ==================== Part 4: DOM Interactions ====================
// DOM Interaction #3: Change title style
document.getElementById("title").style.color = "blue";

// Event listeners to call our custom functions
document.getElementById("changeBtn").addEventListener("click", changeMessage);
document.getElementById("addItemBtn").addEventListener("click", addListItem);
