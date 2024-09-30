document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    const duration = 60 * 1000; // 1 minute in milliseconds

    // Make sure the initial blur is correctly applied by the CSS
    background.style.filter = 'blur(10px)'; // Start with the blur effect

    // Apply the transition duration for the blur effect
    background.style.transition = `filter ${duration}ms ease`;

    // Reduce the blur after a slight delay to allow CSS to settle
    setTimeout(() => {
        background.style.filter = 'blur(0px)'; // Remove the blur effect
    }, 100); // Start the transition after a 100ms delay to ensure initial blur is in place
});
