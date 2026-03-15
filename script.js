// Select the grid container element from the DOM
const container = document.querySelector('#container');

// Creates an size x size grid of square divs inside the container.
// Each square turns black when hovered over (drawing effect).
function createGrid(size){
  // Calculate the pixel size of each square based on the container width (960px)
  const squareSize = 960 / size;

  // Create size * size squares and append them to the container
  for(let i = 0; i < size * size; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Turn the square black when the mouse moves over it
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Listen for clicks on the resize button to prompt for a new grid size
const button = document.querySelector('#resizeBtn');
button.addEventListener('click', () => {
  let newSize = prompt("Enter new grid size (1-100);");
  newSize = parseInt(newSize);

  // Validate that the input is within the allowed range
  if(newSize > 100){
    alert("Please enter a number between 1 and 100.");
  }

  // Clear the existing grid before creating a new one
  container.innerHTML = '';

  // Create a new grid with the specified size
  createGrid(newSize);
})

// Initialize the page with a default 16x16 grid
createGrid(16);