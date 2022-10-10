const menu = document.querySelector("#menu");
const times = document.querySelector(".times");
const nav = document.querySelector(".header-main")

menu.addEventListener('click', (e) => {
  if (nav.style.display = "none") {
    nav.style.display = "flex"
    menu.style.display = "none"
    times.style.display = "block"
  } else if (nav.style.display = "flex") {
    nav.style.display = "none"
    menu.style.display = "none"
  }

  
  
})