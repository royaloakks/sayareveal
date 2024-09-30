// script.js
document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    const duration = 60 * 1000; // 1 minute in milliseconds

    // Set a timeout to gradually reduce the background blur
    setTimeout(() => {
        background.style.filter = 'blur(0px)'; // Remove the blur effect
    }, 1000); // Start after 1 second

    // Set the transition duration for the blur effect
    background.style.transition = `filter ${duration}ms ease`; // Set transition duration
});