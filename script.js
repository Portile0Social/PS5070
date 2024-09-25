function showPage(pageId) {
    // Get all content sections and remove active class
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Add active class to the selected page with a delay for the opacity transition
    setTimeout(function() {
        document.getElementById(pageId).classList.add('active');
    }, 10); // Small delay to ensure proper transitions
}

// Display the home page by default
showPage('home');
