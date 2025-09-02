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

    // New functionality for articles page
    const filterButtons = document.querySelectorAll('.filter-btn');
    const articles = document.querySelectorAll('.article-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            articles.forEach(article => {
                const category = article.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    article.style.display = 'flex';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    });

    // Interactive description card functionality
    const interactiveCard = document.getElementById('interactive-card');
    const cardTexts = interactiveCard.querySelectorAll('.card-text');
    const interactBtn = interactiveCard.querySelector('.interact-btn');

    interactBtn.addEventListener('click', () => {
        cardTexts.forEach(text => {
            text.classList.toggle('active');
        });
        if (cardTexts[0].classList.contains('active')) {
             interactBtn.textContent = 'Tap to explore';
        } else {
            interactBtn.textContent = 'Tap to explore';
        }
    });
});
