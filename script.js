document.getElementById('downloadBtn').addEventListener('click', function() {
    this.classList.add('clicked');
    
    // Remove the class after the animation duration (0.1s)
    setTimeout(() => {
        this.classList.remove('clicked');
    }, 100);
});
