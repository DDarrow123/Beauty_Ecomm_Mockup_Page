let navLink;

function hoverNavLink() {
  navLink = document.querySelector(".nav-container");
  if (navLink) {
    navLink.addEventListener("mouseover", event => {
      console.log(event.target);
      event.target.style.color = "black";
    });
    navLink.addEventListener("mouseout", event => {
      event.target.style.color = "#af9687";
    });
  }
}

hoverNavLink();
