document.addEventListener("DOMContentLoaded", () => {
  let pointArr = [
    new Point(1, 4),
    new Point(2, 1),
    new Point(3, 9),
    new Point(7, 2),
    new Point(11, 10),
  ];

  const IsPointsEqualsToParams = (pointArr, x, y) => {
    let testPoint = new Point(x, y);
    for (let point of pointArr) {
      if (point.Equals(testPoint)) {
        return true;
      }
    }
    return false;
  };

  const IsPointsEqualsToPoint = (pointArr, testPoint) => {
    for (let point of pointArr) {
      if (point.Equals(testPoint)) {
        return true;
      }
    }
    return false;
  };

  const Distance = (pointArr) => {
    let totalDistance = 0;
    for (let i = 0; i < pointArr.length - 1; i++) {
      let dx = pointArr[i + 1].x - pointArr[i].x;
      let dy = pointArr[i + 1].y - pointArr[i].y;
      totalDistance += Math.sqrt(dx * dx + dy * dy);
    }
    return totalDistance;
  };

  const addPoint = () => {
    const x = parseFloat(document.getElementById("xValue").value);
    const y = parseFloat(document.getElementById("yValue").value);
    const newPoint = new Point(x, y);
    pointArr.push(newPoint);
    updatePointsArrayDisplay();
  };

  const updatePointsArrayDisplay = () => {
    const pointsDisplay = document.getElementById("pointsArrayDisplay");
    if (pointArr.length === 0) {
      pointsDisplay.innerHTML = "No points added yet.";
    } else {
      let display = pointArr
        .map((point, index) => `Point ${index + 1}: (${point.x}, ${point.y})`)
        .join("<br>");
      pointsDisplay.innerHTML = display;
    }
  };

  const checkPointWithXY = () => {
    const x = parseFloat(document.getElementById("checkX").value);
    const y = parseFloat(document.getElementById("checkY").value);
    const exists = IsPointsEqualsToParams(pointArr, x, y);
    const output = document.getElementById("checkOutput");
    if (exists) {
      output.innerHTML = `Point (${x}, ${y}) exists in the array.`;
    } else {
      output.innerHTML = `Point (${x}, ${y}) does not exist in the array.`;
    }
  };

  const checkPointObject = () => {
    const x = parseFloat(document.getElementById("objectX").value);
    const y = parseFloat(document.getElementById("objectY").value);
    const testPoint = new Point(x, y);
    const exists = IsPointsEqualsToPoint(pointArr, testPoint);
    const output = document.getElementById("objectCheckOutput");
    if (exists) {
      output.innerHTML = `Point (${x}, ${y}) as an object exists in the array.`;
    } else {
      output.innerHTML = `Point (${x}, ${y}) as an object does not exist in the array.`;
    }
  };
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

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, padding);

    ctx.font = "12px Arial";
    ctx.fillText("X", canvas.width - padding + 10, canvas.height - padding + 5);
    ctx.fillText("Y", padding - 10, padding - 10);

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(
      padding + pointArr[0].x * scaleX,
      canvas.height - (padding + pointArr[0].y * scaleY)
    );

    pointArr.forEach((point, index) => {
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

    const totalDistance = Distance(pointArr);
    document.getElementById(
      "distanceOutput"
    ).innerHTML = `Total Distance: ${totalDistance.toFixed(2)}`;
  };

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

  updatePointsArrayDisplay();
});
