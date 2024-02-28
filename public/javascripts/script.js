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
  
let form = document.getElementById("myForm")

form.addEventListener("submit",function (event) {
    let errors = [];
    let nameInput = document.querySelector("input[name='name']");
    
    if (nameInput.value === "") {
        errors.push("You have to write a valid name")
    }
    emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i
    let emailInput = document.querySelector("input[name='email']");
    if (emailInput.value === "") {
        errors.push("You have to write an email")
    }else if (!emailRegex.test(emailInput.value)) {
        
        errors.push("You have to write a valid email")
    }
    let phoneInput = document.querySelector("input[name='phone']");
    if (phoneInput.value === "") {
        errors.push("You have to write a valid phone")
        
    }
    let messageInput = document.querySelector("textarea[name='message']");
    if (messageInput.value === "") {
        errors.push("You have to write a message")
        
    }
    if (errors.length > 0) {
        event.preventDefault();
        let errorDiv = document.querySelector("div.errors ul")

        errorDiv.innerHTML = "" 

        errors.forEach(error => {
            errorDiv.innerHTML += "<li>" +error+"</li>"
        });
        
    }else{

        alert("Your message was sent successfully")
    }
})
