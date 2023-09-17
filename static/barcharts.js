// Define the data URL
const url = 'http://127.0.0.1:5000/api/v1.0/aggregated_person';

// Create a horizontal bar chart when the document is ready
anychart.onDocumentReady(function() {
    // Fetch JSON data from the specified URL
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Calculate the total number of fatal and non-fatal accidents
            const totalFatal = data.reduce((acc, entry) => acc + entry['Fatal Accident'], 0);
            const totalNonFatal = data.reduce((acc, entry) => acc + entry['Non Fatal Accident'], 0);

            // Log the fetched data for debugging
            console.log('Data fetched successfully:', data);

            // Define a chart instance and specify the chart type (horizontal bar chart)
            const chart = anychart.bar();

            // Enable animation for a smoother appearance
            chart.animation(true);

            // Set chart data
            chart.data(data);

            // Define the chart title with the total counts
            chart.title(`Total Fatal Accidents: ${totalFatal} / Total Non-Fatal Accidents: ${totalNonFatal}`);

            // Define the title for the x-axis (Age_Group)
            chart.xAxis().title("Age_Group");

            // Define the x-axis title and labels
            chart.yAxis()
                .title("Number of Accidents")
                .labels()
            
            // enable legend
            var legend = chart.legend();
            legend.enabled(true);

            // Render the chart in the specified container
            chart.container("container");
            chart.draw();
        });
});