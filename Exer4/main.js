var pointArr = [
  new Point(1, 4),
  new Point(2, 1),
  new Point(3, 9),
  new Point(7, 2),
  new Point(11, 10),
];

document.addEventListener("DOMContentLoaded", () => {
  // Attach event listeners to buttons
  document.getElementById("addPointBtn").addEventListener("click", addPoint);
  document
    .getElementById("checkPointBtn")
    .addEventListener("click", checkPointWithXY);
  document
    .getElementById("checkObjectBtn")
    .addEventListener("click", checkPointObject);
  document
    .getElementById("plotGraphBtn")
    .addEventListener("click", plotGraphAndCalculateDistance);

  // Initial update to display points array
  updatePointsArrayDisplay();
});

/////////////////////// Functions //////////////////////////
////////////////////////////////////////////////////////////

// Adds a new point to the array and updates the display
const addPoint = () => {
  const x = parseFloat(document.getElementById("xValue").value);
  const y = parseFloat(document.getElementById("yValue").value);

  // Check if x and y are valid numbers
  if (isNaN(x) || isNaN(y)) {
    alert("Please enter valid X and Y values.");
    return;
  }

  const newPoint = new Point(x, y);
  pointArr.push(newPoint);
  updatePointsArrayDisplay();
};

// Updates the points array display
const updatePointsArrayDisplay = () => {
  const pointsDisplay = document.getElementById("pointsArrayDisplay");
  pointsDisplay.innerHTML =
    pointArr.length === 0
      ? "No points added yet."
      : pointArr
          .map((point, index) => `Point ${index + 1}: (${point.x}, ${point.y})`)
          .join("<br>");
};

// Checks if a point exists in the array with given X, Y values
const checkPointWithXY = () => {
  const x = parseFloat(document.getElementById("checkX").value);
  const y = parseFloat(document.getElementById("checkY").value);
  const exists = isPointsEqualToParams(pointArr, x, y);
  document.getElementById("checkOutput").innerHTML = exists
    ? `Point (${x}, ${y}) exists in the array.`
    : `Point (${x}, ${y}) does not exist in the array.`;
};

// Checks if a specific point object exists in the array
const checkPointObject = () => {
  const x = parseFloat(document.getElementById("objectX").value);
  const y = parseFloat(document.getElementById("objectY").value);
  const testPoint = new Point(x, y);
  const exists = isPointsEqualToPoint(pointArr, testPoint);
  document.getElementById("objectCheckOutput").innerHTML = exists
    ? `Point (${x}, ${y}) as an object exists in the array.`
    : `Point (${x}, ${y}) as an object does not exist in the array.`;
};

// Plots the graph and calculates the total distance between points
const plotGraphAndCalculateDistance = () => {
  const canvas = document.getElementById("graphCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (pointArr.length < 2) {
    document.getElementById("distanceOutput").innerHTML =
      "Please add at least two points to calculate the distance.";
    return;
  }

  const padding = 40;
  const maxX = Math.max(...pointArr.map((point) => point.x));
  const maxY = Math.max(...pointArr.map((point) => point.y));
  const scaleX = (canvas.width - 2 * padding) / maxX;
  const scaleY = (canvas.height - 2 * padding) / maxY;

  drawGrid(ctx, padding, canvas);
  drawAxis(ctx, padding, canvas);

  // Plot the points
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(
    padding + pointArr[0].x * scaleX,
    canvas.height - (padding + pointArr[0].y * scaleY)
  );
  pointArr.forEach((point) => {
    const x = padding + point.x * scaleX;
    const y = canvas.height - (padding + point.y * scaleY);
    ctx.lineTo(x, y);
  });
  ctx.stroke();

  pointArr.forEach((point) => {
    const x = padding + point.x * scaleX;
    const y = canvas.height - (padding + point.y * scaleY);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText(`(${point.x}, ${point.y})`, x + 5, y - 5);
  });

  const totalDistance = calculateTotalDistance(pointArr);
  document.getElementById(
    "distanceOutput"
  ).innerHTML = `Total Distance: ${totalDistance.toFixed(2)}`;
};

// Draws grid lines on the canvas
const drawGrid = (ctx, padding, canvas) => {
  ctx.strokeStyle = "#ddd";
  ctx.lineWidth = 1;
  for (let x = padding; x <= canvas.width - padding; x += 20) {
    ctx.beginPath();
    ctx.moveTo(x, padding);
    ctx.lineTo(x, canvas.height - padding);
    ctx.stroke();
  }
  for (let y = padding; y <= canvas.height - padding; y += 20) {
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(canvas.width - padding, y);
    ctx.stroke();
  }
};

// Draws axis labels on the canvas
const drawAxis = (ctx, padding, canvas) => {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, canvas.height - padding);
  ctx.lineTo(canvas.width - padding, padding);
  ctx.stroke();

  ctx.font = "12px Arial";
  ctx.fillText("X", canvas.width - padding + 10, canvas.height - padding + 5);
  ctx.fillText("Y", padding - 10, padding - 10);
};

// Calculates the total distance between all points in the array
const calculateTotalDistance = (pointArr) => {
  return pointArr.reduce((acc, curr, index, arr) => {
    if (index < arr.length - 1) {
      const dx = arr[index + 1].x - curr.x;
      const dy = arr[index + 1].y - curr.y;
      acc += Math.sqrt(dx * dx + dy * dy);
    }
    return acc;
  }, 0);
};

// Helper functions for point comparison
const isPointsEqualToParams = (pointArr, x, y) => {
  return pointArr.some((point) => point.Equals(new Point(x, y)));
};

const isPointsEqualToPoint = (pointArr, testPoint) => {
  return pointArr.some((point) => point.Equals(testPoint));
};
