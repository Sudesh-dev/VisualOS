/* ==========================================================
   VISUALOS HOME PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeHero();

    initializeCounters();

    initializeRevealAnimation();

    initializeParallax();

});

/* ==========================================================
   HERO ENTRANCE
========================================================== */

function initializeHero() {

    const heroContent = document.querySelector(".hero__content");
    const heroVisual = document.querySelector(".hero__visual");

    if (heroContent) {

        heroContent.animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 900,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    }

    if (heroVisual) {

        heroVisual.animate(
            [
                {
                    opacity: 0,
                    transform: "translateX(60px)"
                },
                {
                    opacity: 1,
                    transform: "translateX(0)"
                }
            ],
            {
                duration: 1200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

    }

}

/* ==========================================================
   NUMBER COUNTERS
========================================================== */

function initializeCounters() {

    const stats = document.querySelectorAll(".hero__stats h2");

    stats.forEach(stat => {

        const text = stat.textContent;

        if (text === "5+") {

            animateCounter(stat, 5, "+");

        }

        if (text === "100%") {

            animateCounter(stat, 100, "%");

        }

    });

}

function animateCounter(element, target, suffix) {

    let current = 0;

    const speed = Math.max(1, Math.floor(target / 40));

    const timer = setInterval(() => {

        current += speed;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        element.textContent = current + suffix;

    }, 20);

}

/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initializeRevealAnimation() {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden-section");

        observer.observe(section);

    });

}

/* ==========================================================
   PARALLAX
========================================================== */

function initializeParallax() {

    const blurOne = document.querySelector(".blur-one");
    const blurTwo = document.querySelector(".blur-two");

    document.addEventListener("mousemove", e => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        if (blurOne) {

            blurOne.style.transform =
                `translate(${x * 30}px, ${y * 30}px)`;

        }

        if (blurTwo) {

            blurTwo.style.transform =
                `translate(${-x * 30}px, ${-y * 30}px)`;

        }

    });

}

/* ==========================================================
   BUTTON ACTIONS
========================================================== */

const primaryButton = document.querySelector(".primary-btn");

if (primaryButton) {

    primaryButton.addEventListener("click", () => {

        alert("CPU Scheduling module coming next 🚀");

    });

}

const secondaryButton = document.querySelector(".secondary-btn");

if (secondaryButton) {

    secondaryButton.addEventListener("click", () => {

        window.scrollTo({

            top: window.innerHeight,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
   INIT LUCIDE
========================================================== */

lucide.createIcons();