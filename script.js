function showPage(pageId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    setTimeout(function() {
        var currentPage = document.getElementById(pageId);
        currentPage.classList.add('active');

        // Show the text directly without typewriter effect
        const textElement = document.getElementById(pageId + '-text');
        textElement.style.display = 'block'; // Show the text element
    }, 10);
}

// Display the home page by default
showPage('home');
