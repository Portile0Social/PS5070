function showPage(pageId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    setTimeout(function() {
        var currentPage = document.getElementById(pageId);
        currentPage.classList.add('active');

// Display the home page by default
showPage('home');
