// navbar

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollT = 0;
    let navbar = document.getElementById("nav");

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;


        if (scrollTop > lastScrollT) {
            navbar.style.top = "-80px"; // Navbar verstecken
        } else {
            navbar.style.top = "0"; // Navbar anzeigen
        }

        lastScrollT = scrollTop;
    });
});



// ende navbar

let scrollArrow = document.getElementById("scroll-arrow");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        scrollArrow.style.opacity = "0";
    } else {
        scrollArrow.style.opacity = "1";
    }
});

