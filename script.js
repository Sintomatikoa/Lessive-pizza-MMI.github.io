// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation du bouton CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    ctaButton.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
}

// Ajout de la classe 'scrolled' à la navigation lors du défilement
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Menu burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// Intersection Observer pour les animations au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.product-container, .event-container, .story-container, .value-card, .team-member, .contact-form');
    elements.forEach(el => observer.observe(el));
});

// Animation hover sur les cartes
document.querySelectorAll('.value-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});


// Données pour le générateur de parfums
const plats = [
    "Couscous Royal",
    "Blanquette de Veau",
    "Ratatouille",
    "Cassoulet",
    "Raclette",
    "Tartiflette",
    "Bouillabaisse",
    "Croque-Monsieur",
    "Quiche Lorraine",
    "Pot-au-feu",
    "Soupe à l'Oignon",
    "Gratin Dauphinois",
    "Fondue Savoyarde",
    "Choucroute",
    "Bœuf Bourguignon"
];

const adjectifs = [
    "Fraîcheur",
    "Intense",
    "Délicate",
    "Authentique",
    "Gourmande",
    "Exquise",
    "Traditionnelle",
    "Raffinée",
    "Originale",
    "Premium"
];

const marketing = [
    "pour un linge qui met en appétit",
    "qui réveille vos sens",
    "comme un dîner au restaurant",
    "pour des vêtements savoureux",
    "l'élégance gastronomique de votre linge",
    "une expérience culinaire pour votre linge",
    "le goût du propre",
    "la gastronomie française dans votre machine",
    "pour un linge qui sent bon la France",
    "une révolution olfactive"
];

// Fonction pour générer un parfum aléatoire
function generateParfum() {
    const plat = plats[Math.floor(Math.random() * plats.length)];
    const adjectif = adjectifs[Math.floor(Math.random() * adjectifs.length)];
    const phrase = marketing[Math.floor(Math.random() * marketing.length)];
    
    return `"${plat} ${adjectif}" - ${phrase}`;
}

// Gestionnaire d'événement pour le bouton
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const result = document.getElementById('result');
    
    if (generateBtn && result) {
        generateBtn.addEventListener('click', () => {
            result.classList.remove('pop-animation');
            void result.offsetWidth; // Force reflow pour réinitialiser l'animation
            result.classList.add('pop-animation');
            result.textContent = generateParfum();
        });
    }
});