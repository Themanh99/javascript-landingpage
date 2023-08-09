// add nav for
function addNav() {
  const item = document.querySelectorAll(".section");
  const header = document.getElementById("header");

  // create nav bar element
  let nav = document.createElement("nav");
  nav.classList.add("navbar");
  let ul = document.createElement("ul");
  ul.id = "nav-ul";
  for (let i = 1; i <= item.length; i++) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.id = `item${i}`;
    li.innerHTML = `<a href="" id="#section${i}">${item[i - 1].getAttribute("data-nav")}</a>`;
    ul.appendChild(li);
  }
  nav.append(ul);
  header.appendChild(nav);
}

addNav();
// scroll to anchor

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelectorAll("nav a");

  // Add click event listeners to navigation links
  nav.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSectionId = link.getAttribute("id");
      const targetSection = document.querySelector(targetSectionId);

      // Scroll to the appropriate section smoothly
      targetSection.scrollIntoView({ behavior: "smooth", block: "center" });

      // Update active state for the clicked link
      nav.forEach((li) => li.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Update active state based on current scroll position
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100;
    sections.forEach((section) => {
      section.classList.remove("active");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        nav.forEach((li) => li.classList.remove("active"));

        document.querySelector(`nav a[id="#${sectionId}"]`).classList.add("active");
        section.classList.add("active");
      }
    });
  });
});
