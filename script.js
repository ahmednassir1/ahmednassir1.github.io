document.addEventListener('DOMContentLoaded', function() {
    const updatesContainer = document.getElementById('updates');

    // Function to fetch and display updates
    function loadUpdates() {
        // Simulating an API call to fetch updates
        const updates = [
            { title: 'Gold Sell', content: '2726.00.' },
            { title: 'Stop Loss', content: '2736.00.' },
            { title: 'Take Profit', content: '2700.00.' }
        ];

        updates.forEach(update => {
            const updateElement = document.createElement('div');
            updateElement.classList.add('update');

            const titleElement = document.createElement('h4');
            titleElement.textContent = update.title;

            const contentElement = document.createElement('p');
            contentElement.textContent = update.content;

            updateElement.appendChild(titleElement);
            updateElement.appendChild(contentElement);
 
            updatesContainer.appendChild(updateElement);
        });
    }

    // Load updates on page load
    loadUpdates();
});