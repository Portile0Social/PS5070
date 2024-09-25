function showPage(pageId) {
    // Get all content sections and remove active class
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Add active class to the selected page with a delay for the opacity transition
    setTimeout(function() {
        document.getElementById(pageId).classList.add('active');
        if (pageId === 'about') {
            typeText('about-text', 50); // Start typing effect for about page
        } else if (pageId === 'home') {
            typeText('home-text', 50); // Start typing effect for home page
        }
    }, 10); // Small delay to ensure proper transitions
}

// Function to type out text character by character
function typeText(elementId, typingSpeed) {
    const textElement = document.getElementById(elementId);
    const text = textElement.innerText; // Get the text content
    textElement.innerText = ''; // Clear the text element
    textElement.style.display = 'block'; // Show the text element

    let index = 0;

    function typeNextCharacter() {
        if (index < text.length) {
            textElement.innerText += text.charAt(index); // Add the next character
            index++;
            setTimeout(typeNextCharacter, typingSpeed); // Call the function again after a delay
        }
    }

    typeNextCharacter(); // Start the typing effect
}

// Display the home page by default
showPage('home');
