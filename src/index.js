const navContainer = document.querySelector(".nav-container");
const siteName = document.querySelector(".site-name");

navContainer.addEventListener("mouseover", event => {
  console.log(event.target);
  // debugger;
  if (
    event.target.children[0] &&
    event.target.children[0].className &&
    event.target.children[0].className === "nav-link"
  ) {
    event.target.style.textDecorationLine = "underline";
  }
  if (event.target.className === "nav-cart") {
    console.log(event.target);
    event.target.style.textDecorationLine = "underline";
  }
  if (
    event.target.children[0] &&
    event.target.children[0].className &&
    event.target.children[0].className === "site-name"
  ) {
    console.log(event.target);
    // debugger;
    // const siteName = document.querySelector(".site-name");
    siteName.innerHTML = "Hello!";
  }
});

navContainer.addEventListener("mouseout", event => {
  // navSiteName.innerHTML = "avini<span>&#248</span>n";
  event.target.style.textDecoration = "none";
  siteName.innerHTML = "avini<span>&#248</span>n";
});
