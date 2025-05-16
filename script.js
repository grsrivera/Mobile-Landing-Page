if (window.matchMedia("(min-width: 768px)").matches) {
    gsap.registerPlugin(ScrollTrigger)

    gsap.set(".card", {position: "absolute"});

    gsap.to(".card:not(:last-child)", {
        yPercent: -200,
        opacity: 0,
        stagger: 1,
        scrollTrigger: {
            trigger: ".scroll-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            pin: true,
            snap: 1/3
        }
    })
}


const cards = document.querySelectorAll('.feature-pics-card');
const textCards = document.querySelectorAll('.feature-text-card');
let currentIndex = 0;

function showCard(index) {
    // Hide all right-column image cards
    cards.forEach((card) => {
        card.classList.remove('visible');
        card.style.zIndex = 0;
    });

    // Show the current image card
    cards[index].classList.add('visible');
    cards[index].style.zIndex = 1;

    // Hide all left-column text cards
    textCards.forEach((text) => {
        text.classList.remove('visible');
    });

    // Show the current text card
    textCards[index].classList.add('visible');
}


document.getElementById('forward-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

document.getElementById('back-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});

// Email Section

document.getElementById("notify-button").addEventListener("click", async function (e) {
    e.preventDefault();  
    const emailInput = document.getElementById("email-input");
    const email = emailInput.value;

    if (!email) {
        alert("Please enter your email.");
        return;
    }

    const response = await fetch("http://127.0.0.1:5000/submit_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    });

    const result = await response.json();

    if (response.ok) {
        const message = document.createElement("p");
        message.style.fontSize = "1.2rem";
        message.style.textAlign = "center";
        message.textContent = "Thanks! You’ll be the first to know when Rendevu launches.";
        document.querySelector(".notify-form").replaceWith(message);
    } else {
        alert(result.error || "Something went wrong.");
    }
});



// Show the first card on load
showCard(currentIndex);
