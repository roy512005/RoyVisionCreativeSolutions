document.addEventListener("DOMContentLoaded", function() {
    // Options for the IntersectionObserver
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when half of the section is visible
    };

    // Create an IntersectionObserver
    var observer = new IntersectionObserver(startAnimation, options);

    // Get the skills section
    var skillsSection = document.querySelector('.my-skills');

    // Observe the skills section
    observer.observe(skillsSection);
});

function startAnimation(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Once the section comes into view, start the animations for each progress bar
            initiateCountAnimation(entry.target);
            // Stop observing the section to avoid unnecessary repetitions
            observer.unobserve(entry.target);
        }
    });
}

function initiateCountAnimation(skillsSection) {
    var progressBars = skillsSection.querySelectorAll('.progress-bar.progress-line');

    progressBars.forEach(function(progressBar) {
        var targetWidth = progressBar.getAttribute('data-width');
        var currentWidth = 0;
        var incrementRate = targetWidth / 100; // Assuming 1 second animation
        var interval = setInterval(frame, 10);

        function frame() {
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
            } else {
                currentWidth += incrementRate;
                progressBar.style.width = currentWidth + '%';
                progressBar.querySelector('.skill-percentage').textContent = Math.round(currentWidth) + '%';
            }
        }
    });
}





    // Disable right-click
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    })

    // Disable F12 key and other inspect keys
    document.addEventListener('keydown', function(event) {
        if (event.keyCode == 123 || // F12
            (event.ctrlKey && event.shiftKey && event.keyCode == 73) || // Ctrl+Shift+I
            (event.ctrlKey && event.shiftKey && event.keyCode == 74) || // Ctrl+Shift+J
            (event.ctrlKey && event.keyCode == 85) || // Ctrl+U
            (event.ctrlKey && event.shiftKey && event.keyCode == 67)) { // Ctrl+Shift+C
            event.preventDefault();
            return false;
        }
    });


        if (navigator.userAgent.includes('HTTrack') || 
            navigator.userAgent.includes('WebCopier') || 
            navigator.userAgent.includes('WebZip') || 
            navigator.userAgent.includes('Teleport')) {
            document.write("Access Denied");
            window.stop();
        }



