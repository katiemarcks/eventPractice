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

grandParent.addEventListener("click", function () {
  console.log("Grandparent");
});

parent.addEventListener("click", function () {
  console.log("Parent");
});

button.addEventListener("click", function () {
  console.log("Button");
});
