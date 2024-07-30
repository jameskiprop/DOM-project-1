//1. Selecting the elements for the "+" and "-" functions
var plusCircles = document.getElementsByClassName("fa-plus-circle");
var minusCircles = document.getElementsByClassName("fa-minus-circle");

// Looping through plusCircles to add an event listener
for (let i = 0; i < plusCircles.length; i++) {
  plusCircles[i].addEventListener("click", addItem);
}
// Looping through minusCircles to add an event listener
for (let i = 0; i < minusCircles.length; i++) {
  minusCircles[i].addEventListener("click", removeItem);
}

//2. Handling the click events and updating the display
//addItem
function addItem(e) {
  let quantityElement = e.target.parentElement.querySelector(".quantity");
  console.log(quantityElement);
  let currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  console.log("Item Added");
  updateTotalPrice();
}
//RemoveItem
function removeItem(e) {
  let quantityElement = e.target.parentElement.querySelector(".quantity");
  let currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 0) {
    // Prevent negative quantities
    quantityElement.textContent = currentQuantity - 1;
    console.log("Item Removed");
    updateTotalPrice();
  }
}

//3. Recalculating the total price
function updateTotalPrice() {
  let total = 0;
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    let quantity = parseInt(item.querySelector(".quantity").textContent);
    let unitPrice = parseInt(
      item.querySelector(".unit-price").textContent.replace(" $", "") // removing the $ sign
    );
    total += quantity * unitPrice;
    console.log(unitPrice);
  });
  document.querySelector(".total").textContent = total + " $";
}

/*Delete items from the cart.*/
//1. Selecting the Elements
var trashButtons = document.getElementsByClassName("fas fa-trash-alt");

//Looping through the trash icons to add an event listener
for (let i = 0; i < trashButtons.length; i++) {
  trashButtons[i].addEventListener("click", deleteItem);
}
//2. Handling the click events
function deleteItem(event) {
  let itemCard = event.target.closest(".item");
  itemCard.remove();
  updateTotalPrice();
}
/*Like items through a clickable heart-shaped button that will change color accordingly.*/
//1. Adding EventListeners
var likeIcons = document.getElementsByClassName("fas fa-heart");

//looping through all like buttons that exist
for (let i = 0; i < likeIcons.length; i++) {
  likeIcons[i].addEventListener("click", likeButton);
}
//2. Handling the click events
function likeButton(ev) {
  let likeIcon = ev.target; //getting the clicked heart icon

  //toggling between the "liked" class on the heart icon
  likeIcon.classList.toggle("liked");
}
