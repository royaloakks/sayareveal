document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');
    const duration = 60 * 1000; // 1 minute in milliseconds

    // Set a timeout to gradually reduce the overlay blur
    setTimeout(() => {
        overlay.style.filter = 'blur(0px)'; // Remove the blur effect
    }, 1000); // Start after 1 second

    // Optional: If you want to ensure the transition takes 1 minute
    setTimeout(() => {
        overlay.style.transition = `filter ${duration}ms ease`; // Set transition duration
    }, 1000); // Start transition after 1 second
});
