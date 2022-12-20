let detect = document.querySelector("#detect");
let container = document.querySelector(".container");
let button = document.querySelector("button");

let adClasses = [
  "ad",
  "ads",
  "adsbox",
  "ad-placement",
  "doubleclick",
  "ad-placeholder",
  "ad-badge",
];
/*
adClasses.forEach((adClass)=>{

    detect.classList.add(adClass)
})
*/
for (let adClass of adClasses) {
  detect.classList.add(adClass);
}

let getProperty = window.getComputedStyle(detect).getPropertyValue("display");
console.log(getProperty);

button.addEventListener("click", () => {
  container.classList.remove("show");
});

if (!container.classList.contains("show")) {
  getProperty == "none"
    ? container.classList.add("show")
    : container.classList.remove("show");
}
