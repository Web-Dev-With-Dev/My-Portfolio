
  const emailInput = document.getElementById("email-address");

  emailInput.addEventListener("input", function () {
    let value = emailInput.value;

    // Remove anything after "@" and any invalid characters
    const emailName = value.split("@")[0];
    const cleaned = emailName.replace(/[^a-zA-Z0-9._-]/g, "");

    emailInput.value = cleaned;
  });





function toggleImage() {
    let img = document.getElementsByClassName("menu")[0]; // Select the first element
    if (img.src.includes("menu-2-line.png")) {
        img.src = "close-fill.png";
    } else {
        img.src = "menu-2-line.png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let navItems = document.querySelectorAll(".list li a");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all items
            navItems.forEach(nav => nav.classList.remove("active"));

            // Add 'active' class to clicked item
            this.classList.add("active");
        });
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     let navItems = document.querySelectorAll(".list li a");

//     navItems.forEach(item => {
//         item.addEventListener("click", function () {
//             // Remove underline effect from all items
//             navItems.forEach(nav => {
//                 nav.style.fontWeight = "normal";
//                 nav.style.textDecoration = "none";
//                 nav.style.borderBottom = "none";
//             });

//             // Add bold and dark underline effect to clicked item
//             this.style.fontWeight = "bold";
//             this.style.textDecoration = "underline";
//             this.style.borderBottom = "4px solid black";
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let navItems = document.querySelectorAll(".list li a");

//     navItems.forEach(item => {
//         item.addEventListener("click", function () {
//             // Remove 'active' class from all items
//             navItems.forEach(nav => nav.classList.remove("active"));

//             // Add 'active' class to clicked item
//             this.classList.add("active");
//         });
//     });
// });

function redirectToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/dev-gondaliya";
}
function redirectToInsta() {
    window.location.href = "https://www.instagram.com/devbapu_gondaliya_7/";
}
function redirectToGit() {
    window.location.href = "https://github.com/Web-Dev-With-Dev";
}

document.getElementById('scrollDownBtn').addEventListener('click', function() {
    const targetPosition = window.scrollY + window.innerHeight;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 900; // Increase duration for ultra-smooth scrolling
    let startTime = null;

    function smoothScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        window.scrollTo(0, startPosition + distance * easeOutCubic(progress));

        if (progress < 1) {
            requestAnimationFrame(smoothScroll);
        }
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    requestAnimationFrame(smoothScroll);
});

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = window.scrollY;
    let dynamicLink = document.getElementById("dynamicLink"); // Link to change

    window.addEventListener("scroll", function () {
        let currentScroll = window.scrollY;

        if (currentScroll < lastScrollTop) {
            // If scrolling up, change href to the target section
            dynamicLink.href = "#targetSection"; 
        } else {
            // If scrolling down, change href back
            dynamicLink.href = "#";
        }

        lastScrollTop = currentScroll;
    });
});

const butt = document.querySelectorAll(".scrollButton"); // Select multiple buttons
const targetS = document.getElementById("target-section");

// Click to scroll for each button
butt.forEach(butt => {
    butt.addEventListener("click", function() {
        targetS.scrollIntoView({ behavior: "smooth" });
    });
});

// Activate buttons when scrolled
window.addEventListener("scroll", function() {
    const targetRect = targetS.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    butt.forEach(butt => {
        if (window.scrollY > 100 && targetRect.top < windowHeight && targetRect.bottom > 0) {
            butt.classList.add("active");
        } else {
            butt.classList.remove("active");
        }
    });
});
const butto = document.querySelectorAll(".scrollButto"); // Select multiple buttons
const targetSec = document.getElementById("target-sectio");

// Click to scroll for each button
butto.forEach(butt => {
    butt.addEventListener("click", function() {
        targetSec.scrollIntoView({ behavior: "smooth" });
    });
});

// Activate buttons when scrolled
window.addEventListener("scroll", function() {
    const targetRect = targetSec.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    butto.forEach(butt => {
        if (window.scrollY > 100 && targetRect.top < windowHeight && targetRect.bottom > 0) {
            butt.classList.add("active");
        } else {
            butt.classList.remove("active");
        }
    });
});
const buttons = document.querySelectorAll(".scrollButt"); // Select multiple buttons
const targetSecti = document.getElementById("target-secti");

// Click to scroll for each button
buttons.forEach(butt => {
    butt.addEventListener("click", function() {
        targetSecti.scrollIntoView({ behavior: "smooth" });
    });
});

// Activate buttons when scrolled
window.addEventListener("scroll", function() {
    const targetRect = targetSecti.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    buttons.forEach(butt => {
        if (window.scrollY > 100 && targetRect.top < windowHeight && targetRect.bottom > 0) {
            butt.classList.add("active");
        } else {
            butt.classList.remove("active");
        }
    });
});

const bu = document.querySelectorAll(".scrollBut"); // Select multiple buttons
const target = document.getElementById("target-sect");

// Click to scroll for each button
bu.forEach(butt => {
    butt.addEventListener("click", function() {
        target.scrollIntoView({ behavior: "smooth" });
    });
});

// Activate buttons when scrolled
window.addEventListener("scroll", function() {
    const targetRect = target.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    bu.forEach(butt => {
        if (window.scrollY > 100 && targetRect.top < windowHeight && targetRect.bottom > 0) {
            butt.classList.add("active");
        } else {
            butt.classList.remove("active");
        }
    });
});


