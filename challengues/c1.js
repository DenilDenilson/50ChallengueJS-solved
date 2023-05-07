const panels = document.querySelectorAll(".target-container");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Removemos el active de todos los demás
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
