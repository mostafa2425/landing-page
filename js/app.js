/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Define Global Variables

const sectionListResponse = [
  "Home",
  "About",
  "Blog",
  "Testimonial",
  "Contact us",
];
const navbar = document.getElementById("navbar__list");
const main = document.getElementById("main-wrapper");
const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
 Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti.
 Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. 
 Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. 
 Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. 
 Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus.
 Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. 
 Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`;

document.addEventListener("DOMContentLoaded", function () {
  handelPageContent();
  const sectionsList = document.getElementsByClassName("section-wrapper");
  const navbarList = document.querySelectorAll("#navbar__list li");
  let activeSection = 0;
  window.addEventListener("scroll", function () {
    [...sectionsList].forEach( (section, idx) => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if(sectionTop <= 60){
          for (const section of sectionsList) {
              section.classList.remove("active");
              navbarList[idx].classList.remove("active");
            }   
            section.classList.add("active");
            activeSection = [...sectionsList].indexOf(section);
        }else{
            navbarList[idx].classList.remove("active");
        }
    });
    document.querySelectorAll('#navbar__list li')[activeSection].classList.add("active");
  });
});

function handelPageContent() {
  sectionListResponse.forEach((sectionItem, idx) => {
    const li = document.createElement("li");
    const sectionTitle = document.createTextNode(sectionItem);
    const paragraph = document.createTextNode(lorem);
    navbar.appendChild(li);
    li.setAttribute("data-target", `section${idx + 1}`);
    idx === 0 && li.setAttribute("class", "active");
    li.appendChild(sectionTitle);
    li.addEventListener("click", handelActiveLink);
    // start create sections
    const section = document.createElement("section");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const sectionHeader = document.createTextNode(sectionItem);

    div.setAttribute("class", "landing__container");
    section.setAttribute("id", `section${idx + 1}`);
    section.setAttribute("data-nav", `section ${idx + 1}`);
    idx === 0
      ? section.setAttribute("class", "section-wrapper active")
      : section.setAttribute("class", "section-wrapper");
    main.appendChild(section);
    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(p);
    h2.appendChild(sectionHeader);
    p.appendChild(paragraph);
  });
}

function handelActiveLink(e) {
    let linkId = e.target.getAttribute("data-target");
    const activeSection = document.getElementById(linkId);
    activeSection.scrollIntoView({ behavior: "smooth" });
//   const navbarList = document.querySelectorAll("#navbar__list li");
//   navbarList.forEach((link) => {
//     link.classList.remove("active");
//     let otherLinksId = link.getAttribute("data-target");
//     document.getElementById(otherLinksId).classList.remove("active");
//   });
//   e.target.classList.add("active"); 
//   activeSection.classList.add("active");
}

