const img = document.getElementById("img");

img.addEventListener("click", () => {
  if (img.classList.contains("grande")) {
    img.classList.remove("grande");
  } else {
    img.classList.add("grande");
  }
});