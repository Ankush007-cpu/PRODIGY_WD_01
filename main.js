document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var menuToggle = document.getElementById("menu-toggle");
    var navLinks = document.getElementById("nav-links");
    var navItems = document.querySelectorAll(".nav-item");


    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }


        let fromTop = window.scrollY + 100;
        navItems.forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                navItems.forEach(nav => nav.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });


    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });
    }


    navItems.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var targetId = this.getAttribute("href");
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }

           
            navLinks.classList.remove("open");
        });
    });
});
