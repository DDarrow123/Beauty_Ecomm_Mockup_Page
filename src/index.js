const navContainer = document.querySelector(".nav-container");
const navSiteName = document.querySelector(".site-name");
const navSiteSpan = document.querySelector("span");

function hoverNavLink() {
  // const navContainer = document.querySelector(".nav-container");
  // const navSiteName = document.querySelector(".site-name");
  // const navSiteSpan = document.querySelector("span");
  if (navContainer) {
    navContainer.addEventListener("mouseover", event => {
      if (event.target !== navSiteName) {
        // debugger;
        console.log(event.target);
        // navSiteName.innerHTML = "Hi";
        event.target.style.textDecorationLine = "underline";
      }
    });
  }
  hoverOffLink();
}

function hoverOffLink() {
  navContainer.addEventListener("mouseout", event => {
    // navSiteName.innerHTML = "avini<span>&#248</span>n";
    event.target.style.textDecoration = "none";
    // event.target.children[2].style.textDecoration = "none";
    // event.target.children[3].style.textDecoration = "none";
  });
}

hoverNavLink();

// hoverOffLink();
