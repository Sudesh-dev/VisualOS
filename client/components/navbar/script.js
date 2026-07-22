// =============================================
// VisualOS Navbar Script
// =============================================

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    initializeNavbar();

});

// =============================================
// Theme
// =============================================

function initializeTheme() {

    const themeButton = document.getElementById("theme-toggle");

    if (!themeButton) return;

    const icon = themeButton.querySelector("i");

    const savedTheme = localStorage.getItem("visualos-theme") || "light";

    document.documentElement.setAttribute("data-theme", savedTheme);

    updateThemeIcon(savedTheme, icon);

    themeButton.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const nextTheme =
            currentTheme === "light" ? "dark" : "light";

        document.documentElement.setAttribute("data-theme", nextTheme);

        localStorage.setItem("visualos-theme", nextTheme);

        updateThemeIcon(nextTheme, icon);

    });

}

// =============================================
// Update Theme Icon
// =============================================

function updateThemeIcon(theme, icon) {

    if (!icon) return;

    if (theme === "dark") {

        icon.setAttribute("data-lucide", "sun");

    } else {

        icon.setAttribute("data-lucide", "moon");

    }

    lucide.createIcons();

}

// =============================================
// Navbar Scroll Effect
// =============================================

function initializeNavbar() {

    const navbar = document.querySelector(".navbar");

    if (!navbar) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.style.height = "64px";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.08)";

        } else {

            navbar.style.height = "72px";

            navbar.style.boxShadow = "none";

        }

    });

}

// =============================================
// Active Navigation Link
// =============================================

const links = document.querySelectorAll(".nav-link");

const currentPage =
    window.location.pathname.split("/").pop();

links.forEach(link => {

    const href =
        link.getAttribute("href").split("/").pop();

    if (href === currentPage) {

        document
            .querySelectorAll(".nav-link")
            .forEach(nav => nav.classList.remove("active"));

        link.classList.add("active");

    }

});

// =============================================
// Search Button
// =============================================

const searchButton = document.getElementById("search-btn");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        alert("Search coming in Version 2 🚀");

    });

}