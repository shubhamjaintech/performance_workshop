// app.js
document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
  
    // Render the data on the frontend
    const dataContainer = document.getElementById('data-container');
    dataContainer.innerHTML = `<p>${data.title}</p>`;
  });