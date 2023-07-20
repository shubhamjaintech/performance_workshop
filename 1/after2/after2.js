// after.js
// Data will be passed from server-side to the frontend during initial render
const initialData = { message: "Hello from the server!" };

document.addEventListener('DOMContentLoaded', () => {
  // Fetch with timeout
  setTimeout(fetchDataAndRender, 5000); 
});

async function fetchDataAndRender() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();

  // Render the fetched data on the frontend
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = `<p>${data.title}</p>`;
}
