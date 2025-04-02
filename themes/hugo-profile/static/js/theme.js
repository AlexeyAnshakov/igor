// Function to toggle theme
function toggleTheme() {
    if (document.body.className.includes("dark")) {
        document.body.classList.remove('dark');
        localStorage.setItem("pref-theme", 'light');
        toggleLogos('light');
    } else {
        document.body.classList.add('dark');
        localStorage.setItem("pref-theme", 'dark');
        toggleLogos('dark');
    }
}

// Function to toggle logos
function toggleLogos(theme) {
    const lightLogo = document.querySelector('.light-mode-logo');
    const darkLogo = document.querySelector('.dark-mode-logo');
    
    if (theme === 'dark') {
        if (lightLogo) lightLogo.style.display = 'none';
        if (darkLogo) darkLogo.style.display = 'inline-block';
    } else {
        if (lightLogo) lightLogo.style.display = 'inline-block';
        if (darkLogo) darkLogo.style.display = 'none';
    }
}

// Initialize theme and logos based on stored preference
document.addEventListener('DOMContentLoaded', function() {
    let localStorageValue = localStorage.getItem("pref-theme");
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorageValue === "dark" || (!localStorageValue && mediaQuery)) {
        document.body.classList.add('dark');
        toggleLogos('dark');
    } else {
        toggleLogos('light');
    }
}); 