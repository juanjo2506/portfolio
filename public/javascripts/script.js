        /* menu */
        let menuIcon = document.querySelector("#menu-icon");
        let navbar = document.querySelector(".navbar");
        menuIcon.onclick = () =>{
          menuIcon.classList.toggle("bx-x");
          navbar.classList.toggle("active");
        }



        /* scroll nac effect */
        let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("header nav a[href*=" + id +"]").classList.add('active');
            });

        };
    });
    let header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY > 100)

    /* remove toggle icon and navar when click navbar */
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};



/* scroll reveal */
ScrollReveal({
    /* el reset es por si cada vez que paso por las secciones quiero que se haga las animaciones de nuevo */
/*     reset:true, */
    distance: "80px",
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .btn-portfolio', { origin: "bottom" });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: "left" });
ScrollReveal().reveal('.home-content p, .about-content', { origin: "right" });


const typed = new Typed(".multiple-text", {
    strings: ["a FullStack Developer", "an Industrial engineer"],
    typeSpeed: 100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let NoteButton = document.querySelector(".btn-portfolio")
let Note = document.querySelector(".Note")
NoteButton.onclick = () =>{
    Note.classList.toggle("active-note");
  }