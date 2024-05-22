// JavaScript file (script.js)

// Toggle mobile menu
document.getElementById('menu-bars').addEventListener('click', function() {
    document.querySelector('header .navbar').classList.toggle('active');
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
