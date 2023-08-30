// Define updates array with sample data
const updates = [
    {
      date: "2022-02-01",
      title: "New Note Added",
      description: "Added a new lecture note on Topic XYZ.",
      link: "note4.html"
    },
    {
      date: "2022-01-15",
      title: "Updated Note",
      description: "Updated the lecture note for Topic ABC.",
      link: "note1.html"
    }
  ];
  
  // Function to display updates in the DOM
  function displayUpdates() {
    const updatesContainer = document.getElementById("updates-container");
  
    updates.forEach(update => {
      const updateElement = document.createElement("div");
      updateElement.innerHTML = `
        <p><strong>${update.date}</strong>: ${update.title}</p>
        <p>${update.description}</p>
        <a href="${update.link}">Read More</a>
      `;
  
      updatesContainer.append(updateElement);
    });
  }
  
  // Call the displayUpdates function
  displayUpdates();
  