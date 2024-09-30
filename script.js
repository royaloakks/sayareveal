// script.js
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const duration = 60 * 1000; // 1 minute in milliseconds

    // Set the initial blur to 10px (95% blur)
    overlay.style.filter = 'blur(10px)'; // Start with a strong blur

    // Set a timeout to gradually reduce the overlay blur
    setTimeout(() => {
        overlay.style.filter = 'blur(0px)'; // Remove the blur effect
    }, 1000); // Start after 1 second

    // Set the transition duration for the blur effect
    overlay.style.transition = `filter ${duration}ms ease`; // Set transition duration
});