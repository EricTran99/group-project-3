const url = 'http://127.0.0.1:5000/api/v1.0/accident'; // data URL

function LineChart() {
  // Fetch JSON data from the specified URL
  d3.json(url).then(function(data) {
    console.log('Data fetched successfully:', data); // Log the fetched data

    // Extract xData by mapping the 'ACCIDENTDATE' property from each item in the data
    let xData = data.map(item => item['ACCIDENTDATE']);
    
    // Sort xData in ascending order
    xData.sort((a, b) => a - b);

    // Extract yData by mapping the 'ACCIDENT_NO' property from each item in the data
    let yData = data.map(item => item['ACCIDENT_NO']);

    // Create an array to store unique years
    let uniqueYears = [];

      // Iterate through each date string in xData
      xData.forEach(dateString => {
      // Split the date string into day, month, and year parts
      let parts = dateString.split('/');

      // Create a Date object using the year, month (subtract 1 because months are 0-indexed), and day
      let dateObject = new Date(parts[2], parts[1] - 1, parts[0]);

      // Get the year from the date object
      let year = dateObject.getFullYear();

      // Check if the year is not already in the uniqueYears array, then add it
      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
  }
});

// Now, uniqueYears will contain an array of unique years
console.log(uniqueYears);

    // Define the data for the line chart
    let line_data = [{
      x: uniqueYears,
      y: yData,
      mode: 'lines', // Set the mode to 'lines' for a line chart
      type: 'scatter' // Use 'scatter' for line charts
    }];

    // Create a new plot with the ID 'plot' and the extracted data
    Plotly.newPlot('plot', line_data);

    // Iterate through each date string in xData
    xData.forEach(dateString => {
      // Split the date string into day, month, and year parts
      let parts = dateString.split('/');

      // Create a Date object using the year, month (subtract 1 because months are 0-indexed), and day
      let dateObject = new Date(parts[2], parts[1] - 1, parts[0]);

      // Get the year from the date object
      let year = dateObject.getFullYear();

      console.log(year); // Output: Year for each date string
    });
  });
}

// This function plots default charts for when the page is visited
function init() {
  // Plotting default charts
  LineChart(); // Call the LineChart function
  d3.json(url).then(function(data) {
  });
}

init();