// Function to handle light/dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.icon-button:last-of-type');
    const body = document.body;

    // Check for saved theme preference or set to default
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme + '-mode');

    themeToggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    });

    // Basic search functionality placeholder
    const searchButton = document.querySelector('.icon-button:first-of-type');
    searchButton.addEventListener('click', () => {
        alert('Search functionality coming soon!');
    });
});
