document.addEventListener('DOMContentLoaded', () => {
    const background = document.querySelector('.background');
    setTimeout(() => {
        background.style.opacity = 1; // Reveal the background after a delay
    }, 1000); // Adjust delay as needed
});
