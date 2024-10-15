document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', function(event) {
        if (event.code === 'Backquote') {
            event.preventDefault(); 
            fetch('loginPS.html')
                .then(response => response.text())
                .then(html => {
                    document.body.innerHTML = html;})
                .catch(error => console.error('Error loading the page:', error));}});});
