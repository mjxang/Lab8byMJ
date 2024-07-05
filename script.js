document.addEventListener("DOMContentLoaded", () => {
    //get the elements for displaying quote and button
    const quoteElement = document.getElementById('quote'); //displays quotes
    const newQuoteButton = document.getElementById('new-quote'); //button that fetches new quote
    
    //function to fetch new quote from API
    const fetchQuote = () => {
        const url = 'https://api.kanye.rest/'; //API endpoint
        fetch(url)
            .then(response => response.json()) //parse JSON response
            .then(data => {
                quoteElement.textContent = data.quote; //displays kanye quote
            })
            .catch(error => {
                console.error('Error fetching data:', error); //logs any errors
                quoteElement.textContent = 'Failed to fetch quote.'; //displays error message
            });
    };

    // Fetch a new quote on page load
    fetchQuote();

    // Fetch a new quote when the button is clicked
    newQuoteButton.addEventListener('click', fetchQuote);
});
