 // Update CSS variabelen op basis van muispositie
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Zet de coördinaten in de CSS variabelen --x en --y
            document.body.style.setProperty('--x', `${x}px`);
            document.body.style.setProperty('--y', `${y}px`);
        });

// Navigation toggle (hamburger)
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('nav ul');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('open');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close when clicking a link
    menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Ensure menu closes on resize to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('open');
            toggle.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
});