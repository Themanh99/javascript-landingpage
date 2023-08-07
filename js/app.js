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
    li.innerHTML = `Section ${i}`;
    ul.appendChild(li);
  }
  nav.append(ul);
  header.appendChild(nav);
}

addNav();

// scroll to anchor
function scrollToSection(e) {
  const id = String(e.target.id);
  if (e.target.tagName != "LI") return;
  else {
    const item = document.getElementById(`section${id.slice(-1)}`);
    item.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}
document.addEventListener("click", (event) => scrollToSection(event));
document.removeEventListener("click", (event) => scrollToSection(event));

// function makeActive() {
//   const sections = document.querySelectorAll(".section");
//   for (const section of sections) {
//     const box = section.getBoundingClientRect();
//     //Find a value that works best, but 150 seems to be a good start.
//     if (box.top <= 150 && box.bottom >= 150) {
//       //apply active state on current section and corresponding Nav link
//     } else {
//       //Remove active state from other section and corresponding Nav link
//     }
//   }
// }

/*
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = link.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            // Scroll to the appropriate section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Update active state for the clicked link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Update active state based on current scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100; // Add a buffer for better accuracy

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    });
});
*/
