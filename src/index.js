const navContainer = document.querySelector(".nav-container");

navContainer.addEventListener("mouseover", event => {
  if (
    event.target.children[0] &&
    event.target.children[0].className &&
    event.target.children[0].className === "nav-link"
  ) {
    event.target.style.textDecorationLine = "underline";
  }
  // console.log(event.target);
  // debugger;
  if (event.target.className === "nav-cart") {
    console.log(event.target);
    event.target.style.textDecorationLine = "underline";
  }
});

navContainer.addEventListener("mouseout", event => {
  // navSiteName.innerHTML = "avini<span>&#248</span>n";
  event.target.style.textDecoration = "none";
});
