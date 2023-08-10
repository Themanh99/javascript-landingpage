// Add nav for
function addNav() {
  const item = document.querySelectorAll(".section");
  const header = document.getElementById("header");

  // Create nav bar element
  let nav = document.createElement("nav");
  nav.classList.add("navbar");
  let ul = document.createElement("ul");
  ul.id = "nav-ul";
  for (let i = 1; i <= item.length; i++) {
    let li = document.createElement("li");
    li.classList.add("item");
    li.id = `item${i}`;
    // Get data-nav from tag section add to nav
    li.innerHTML = `<a href="" id="#section${i}">${item[i - 1].getAttribute(
      "data-nav"
    )}</a>`;
    ul.appendChild(li);
  }
  nav.append(ul);
  header.appendChild(nav);
}

addNav();

const nav = document.querySelectorAll("nav a");

// Add click event to nav
nav.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSecId = link.getAttribute("id");
    const targeSec = document.querySelector(targetSecId);

    // Scroll to the appropriate section smoothly
    targeSec.scrollIntoView({ behavior: "smooth", block: "center" });
    // Add active class
    nav.forEach((li) => li.classList.remove("active"));
    link.classList.add("active");
  });
});

// Check if this section in view port is return true
function isInViewPort(section, widthView) {
  const secBounding = section.getBoundingClientRect();
  if (widthView <= 500) {
    return (
      secBounding.top <= window.innerHeight &&
      secBounding.bottom >= window.innerHeight
    );
  }
  return (
    secBounding.top > 0 &&
    secBounding.bottom - 100 <
      (window.innerHeight || document.documentElement.clientHeight)
  );
}
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");

  // Scrolltop to remove active class on navigation bar
  if (window.scrollY < 99) {
    nav.forEach((li) => li.classList.remove("active"));
  }

  sections.forEach((section) => {
    const sectionId = section.getAttribute("id");
    if (isInViewPort(section, window.innerWidth)) {
      /** Remove active class on navigation bar */
      nav.forEach((li) => li.classList.remove("active"));
      section.classList.add("active");
      document
        .querySelector(`nav a[id="#${sectionId}"]`)
        .classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
});

// Start logic of button to top
const btnTop = document.getElementById("btn-top");
window.onscroll = function () {
  scrollDisplay();
};

// Check state of document or element . If it has scroll top != 0 then set style for btn-top
function scrollDisplay() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnTop.style.display = "inline-block";
  } else {
    btnTop.style.display = "none";
  }
}

// Function add event for button top when clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// End logic button to top
