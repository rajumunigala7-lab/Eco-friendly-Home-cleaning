/* =====================================================
   HEADER JS - ECONEST
===================================================== */


/* =========================
   THEME TOGGLE
========================= */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("econest-theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");


    const isDark =
        document.body.classList.contains("dark-mode");


    localStorage.setItem(
        "econest-theme",
        isDark ? "dark" : "light"
    );


    themeToggle.innerHTML =
        isDark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

});



/* =========================
   RTL / LTR
========================= */

const rtlToggle =
    document.getElementById("rtlToggle");


const savedDirection =
    localStorage.getItem("econest-direction");


if (savedDirection === "rtl") {

    document.documentElement.dir = "rtl";

    rtlToggle.textContent = "LTR";

} else {

    document.documentElement.dir = "ltr";

    rtlToggle.textContent = "RTL";
}


rtlToggle.addEventListener("click", function () {

    const currentDirection =
        document.documentElement.dir;


    if (currentDirection === "ltr") {

        document.documentElement.dir = "rtl";

        rtlToggle.textContent = "LTR";

        localStorage.setItem(
            "econest-direction",
            "rtl"
        );

    } else {

        document.documentElement.dir = "ltr";

        rtlToggle.textContent = "RTL";

        localStorage.setItem(
            "econest-direction",
            "ltr"
        );

    }

});



/* =========================
   MOBILE MENU
========================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");


const navMenu =
    document.getElementById("navMenu");


mobileMenuButton.addEventListener("click", function (event) {

    event.stopPropagation();


    navMenu.classList.toggle("show");


    const isOpen =
        navMenu.classList.contains("show");


    mobileMenuButton.innerHTML =
        isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

});



/* =========================
   MOBILE HOME DROPDOWN
========================= */

const dropdown =
    document.querySelector(".dropdown");


const dropdownLink =
    document.querySelector(".dropdown-toggle");


dropdownLink.addEventListener("click", function (event) {

    if (window.innerWidth <= 850) {

        event.preventDefault();

        event.stopPropagation();

        dropdown.classList.toggle("open");

    }

});



/* =========================
   CLOSE MENU AFTER LINK CLICK
========================= */

document.querySelectorAll(
    ".nav-menu > a, .dropdown-menu a"
).forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

        dropdown.classList.remove("open");


        mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});



/* =========================
   CLICK OUTSIDE CLOSE
========================= */

document.addEventListener("click", function (event) {

    if (
        !navMenu.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
    ) {

        navMenu.classList.remove("show");

        dropdown.classList.remove("open");


        mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }

});



/* =========================
   ESC KEY CLOSE
========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navMenu.classList.remove("show");

        dropdown.classList.remove("open");


        mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }

});



/* =========================
   RESET MENU ON RESIZE
========================= */

window.addEventListener("resize", function () {

    if (window.innerWidth > 850) {

        navMenu.classList.remove("show");

        dropdown.classList.remove("open");


        mobileMenuButton.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }

});