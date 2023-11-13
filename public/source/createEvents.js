async function createEvent(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const capacity = document.getElementById("capacity").value;
  const attendees = 0;
  const type = document.getElementById("type").value;

  const formData = {
    title,
    description,
    date,
    capacity,
    attendees,
    type,
  };

  try {
    const response = await fetch("http://localhost:3000/events/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Event created successfully", result.message);
      window.location.href = "./source/eventPage.html";
    } else {
      console.error("Error creating event:", response.statusText);
    }
  } catch (error) {
    console.error("Error during event creation:", error);
  }
}
// window.location.href = "./source/eventPage.html";
