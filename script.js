const paraElem = document.querySelector(".change");
console.log(paraElem);
paraElem.addEventListener("click", change);
function change() {
  paraElem.textContent = "I was changed";
}
