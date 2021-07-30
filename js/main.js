const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
    if (this.classList.contains("collapsible--expanded"))
      document.querySelector(".header").style.overflow = "visible";
    else document.querySelector(".header").style.overflow = "hidden";
  })
);

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const callback = (entries) => {
  const ent = entries[0];

  if (!ent.isIntersecting) {
    document.body.classList.add("fixe");
  }

  if (ent.isIntersecting) {
    document.body.classList.remove("fixe");
  }
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".section-hero");
observer.observe(target);
