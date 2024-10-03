function loadSection(section) {
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error('Error loading section:', error));
}

// Charger la section Home par défaut
document.addEventListener('DOMContentLoaded', function() {
    loadSection('Accueil');
});




//
document.addEventListener('click', function (event) {
    // Only proceed if the navbar-toggler is visible (meaning the navbar is collapsed)
    if (window.innerWidth <= 992) {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        // Check if the clicked element is a link inside the navbar
        if (navbarCollapse.classList.contains('show') && event.target.closest('.nav-link')) {
            navbarToggler.click(); // Programmatically close the navbar by triggering a click on the toggler
        }
    }
});

