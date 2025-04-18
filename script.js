//your code here!

const list = document.getElementById("infi-list");

let itemCount = 0;

// Function to add n items to the list
function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Infinite scroll handler
list.addEventListener("scroll", function () {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});
