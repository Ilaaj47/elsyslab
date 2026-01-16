 // Update CSS variabelen op basis van muispositie
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Zet de coördinaten in de CSS variabelen --x en --y
            document.body.style.setProperty('--x', `${x}px`);
            document.body.style.setProperty('--y', `${y}px`);
        });