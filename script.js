/*Adjust the quantity of each item through  “+” and “-” buttons.*/
//1. Adding EventListeners
var plusCircle = document.getElementsByClassName(" fa-plus-circle");
var minusCircle = document.getElementsByClassName(" fa-minus-circle");

for (let i = 0; i < plusCircle.length; i++) {
  plusCircle[i].addEventListener("click", addItem);
}

function addItem() {
  console.log("Okay");
}
addItem();

//2. Handling the click events
plusCircle.addEventListener("click", () => {
  console.log("item Added");
});

minusCircle.addEventListener("click", () => {
  console.log("Item Removed");
});
//3. Updating the Display:
function addItem(a) {}

//4. Recalculating the total price

/*Delete items from the cart.*/
//1. Adding EventListeners
//2. Handling the click events
//3. Recalculating the total price

/*Like items through a clickable heart-shaped button that will change color accordingly.*/

//1. Adding EventListeners
//2. Handling the click events
//3. Updating the Display:

/*See the total price adjusted according to quantity and deletions.*/

//1. Recalculate the total price
//2. Updating the display
