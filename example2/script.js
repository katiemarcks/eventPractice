var grandParent = document.querySelector(".grandparent");
var parent = document.querySelector(".parent");
var button = document.querySelector("#click-me");

button.addEventListener("click", logEvent);

function logEvent() {
  console.log(this);
}
