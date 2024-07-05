document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");

  fetch("https://api.goflightlabs.com/flights?access_key=YOUR_ACCESS_KEY")
    .then((response) => response.json())
    .then((data) => {
      // Process and display data
      displayData(data.data);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayData(data) {
  const flightList = document.createElement("ul");
  data.forEach((flight) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${flight.airline_name}: ${flight.flight_number} from ${flight.departure_airport} to ${flight.arrival_airport}`;
    flightList.appendChild(listItem);
  });
  contentDiv.appendChild(flightList);
}
