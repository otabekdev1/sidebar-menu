const menuToggle = document.querySelector(".menutoggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function (params) {
  navigation.classList.toggle("active");
};
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("act"));
  this.classList.add("act");
}
list.forEach((item) => item.addEventListener("click", activeLink));
