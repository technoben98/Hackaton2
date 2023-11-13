// Events part

async function fetchAndDisplayEvents() {
  try {
    const response = await fetch("http://localhost:3000/events/all");
    const result = await response.json();

    if (response.ok) {
      const events = result.events;
      displayEvents(events);
    } else {
      console.error("Error getting events:", result.message);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

function displayEvents(events) {
  const eventsContainer = document.getElementById("eventsCards");
  eventsContainer.innerHTML = "";

  events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("eventCard");
    eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="description">Description: ${event.description}</p>
            <p class="date">Date: ${event.date}</p>
            <p class="capacity">Capacity: ${event.capacity}</p>
          `;
    eventsContainer.appendChild(eventCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayEvents();
});

// Filter events
async function filterEvents(eventType) {
  try {
    const response = await fetch("http://localhost:3000/events/all");
    const result = await response.json();

    if (response.ok) {
      const events = result.events;
      const eventsContainer = document.getElementById("eventsCards");
      eventsContainer.innerHTML = "";

      events.forEach((event) => {
        if (event.type === eventType) {
          const eventCard = document.createElement("div");
          eventCard.classList.add("eventCard");
          eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p class="description">Description: ${event.description}</p>
            <p class="date">Date: ${event.date}</p>
            <p class="capacity">Capacity: ${event.capacity}</p>
          `;
          eventsContainer.appendChild(eventCard);
        }
      });
    } else {
      console.error("Error getting events:", result.message);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

async function fetchAllEvents() {
  try {
    const response = await fetch("http://localhost:3000/events/all");
    const result = await response.json();

    if (response.ok) {
      const events = result.events;
      displayEvents(events);
    } else {
      console.error("Error getting events:", result.message);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayEvents("http://localhost:3000/events/all");
});
