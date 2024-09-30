document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const duration = 60 * 1000; // 1 minute in milliseconds

    // Set a timeout to gradually reduce the overlay opacity
    setTimeout(() => {
        overlay.style.opacity = 0; // Reveal the background by reducing overlay opacity
    }, 1000); // Start after 1 second

    // Optional: If you want to ensure the transition takes 1 minute
    setTimeout(() => {
        overlay.style.transition = `opacity ${duration}ms ease`; // Set transition duration
    }, 1000); // Start transition after 1 second
});
