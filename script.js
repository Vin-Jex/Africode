const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".header-main");
const link = document.querySelectorAll(".link")
const otherTarget = document.querySelectorAll(".link.active")

toggle.addEventListener('click', () => {
  toggle.classList.toggle("show-nav");
  nav.classList.toggle("show-nav")
});

link.forEach((links) => {
  links.addEventListener("click", (link) => {
    if (link.classList = "active") {
      link.classList.remove('active')
      link.target.classList.add('active')
      // console.log(e.target.classList);
    }
  })
})


