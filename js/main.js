const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    if (this.classList.contains("collapsible--expanded"))
      document.querySelector(".header").style.overflow = "visible";
    else document.querySelector(".header").style.overflow = "hidden";
  })
);

console.log("working.....");
