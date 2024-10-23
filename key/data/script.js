// Fetch the JSON data
fetch('items.json')
    .then(response => response.json())
    .then(data => {
        const linkList = document.getElementById('link-list');
        
        // Loop through the data and create list items with links and descriptions
        data.forEach(item => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            const description = document.createElement('p');
            
            // Set the link's text and URL
            link.textContent = item.name;
            link.href = item.url;
            
            // Set the description text
            description.textContent = item.description;
            
            // Append the link and description to the list item
            listItem.appendChild(link);
            listItem.appendChild(description);
            
            // Append the list item to the list
            linkList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
