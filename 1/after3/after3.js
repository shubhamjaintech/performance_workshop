// after.js
// Data will be passed from server-side to the frontend during initial render
const initialData = { message: "Hello from the server!" };

document.addEventListener('DOMContentLoaded', () => {
  // Render the initial data on the frontend without fetching
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = `<p>${initialData.message}</p>`;

  // Fetch additional data after initial render for interactivity
  fetchDataAndRender();
});

async function fetchDataAndRender() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  // Render the fetched data on the frontend
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = `<p>${data.title}</p>`;
}
