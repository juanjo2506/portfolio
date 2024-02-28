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
    strings: ["a FullStack Developer", "an Industrial Engineer"],
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
let AchievementsButton = document.querySelector(".btn-about")
let achievements = document.querySelector(".achievements")
AchievementsButton.onclick = () =>{
    achievements.classList.toggle("display-achievements");
  }
  

  document.getElementById("myForm").addEventListener("submit", function(event) {
    // Se deja que el formulario se envíe normalmente
    // Después de que se envíen los datos, se redirecciona al usuario
    setTimeout(function() {
      window.location.href = "https://juanjo-portfolio.onrender.com"; // Redirigir al usuario a la página deseada
    }, 1000); // 1000 milisegundos = 1 segundo
    alert("Your message was sent successfully")
  });