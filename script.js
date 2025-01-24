document.addEventListener('DOMContentLoaded', function() {
    const updatesContainer = document.getElementById('updates');

    // Function to fetch and display updates
    function loadUpdates() {
        // Simulating an API call to fetch updates
        const updates = [
            { title: 'Gold Buy', content: '2754.00.' },
            { title: 'Stop Loss', content: '2740.00.' },
            { title: 'Take Profit', content: '2790.00.'},
            {title: 'Status: Active...'}
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