/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.ripple-button');
    const overlay = document.querySelector('.ripple-overlay');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        const href = this.href;

        const rect = button.getBoundingClientRect();
        overlay.style.left = `${event.clientX - rect.left}px`;
        overlay.style.top = `${event.clientY - rect.top}px`;

        overlay.style.transform = 'scale(20)';
        overlay.style.opacity = '1';

        setTimeout(function() {
            window.location.href = href;
        }, 1000); // Match the duration of the CSS transition
    });
});
