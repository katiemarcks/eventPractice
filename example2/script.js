// var grandParent = document.querySelector(".grandparent");
// var parent = document.querySelector(".parent");
// var button = document.querySelector("#click-me");

// button.addEventListener("click", logEvent);

// function logEvent() {
//   console.log(this);
// }

var grandParent = document.querySelector(".grandparent");
var parent = document.querySelector(".parent");
var button = document.querySelector("#click-me");

grandParent.addEventListener("click", function (event) {
  console.log(event.target);
});

parent.addEventListener("click", function (event) {
  console.log(event.target);
});

button.addEventListener("click", function (event) {
  console.log(event.target);
});
