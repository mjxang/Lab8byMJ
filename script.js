document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');
    
    const fetchQuote = () => {
        const url = 'https://api.kanye.rest/';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                quoteElement.textContent = data.quote;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                quoteElement.textContent = 'Failed to fetch quote.';
            });
    };

    // Fetch a new quote on page load
    fetchQuote();

    // Fetch a new quote when the button is clicked
    newQuoteButton.addEventListener('click', fetchQuote);
});
