function showPage(pageId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active'); // Hide all content sections
    });

    setTimeout(function() {
        var currentPage = document.getElementById(pageId);
        currentPage.classList.add('active'); // Show the selected page
    }, 10);
}

// Display the home page by default
showPage('home');
