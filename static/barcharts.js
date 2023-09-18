// Set the SameSite and Secure attributes for your cookies
document.cookie = "myCookie=myValue; SameSite=None; Secure";

// Set the SameSite and Secure attributes for your cookies
document.cookie = "myCookie=myValue; SameSite=None; Secure";

// Define the data URL
const url4 = 'http://127.0.0.1:5000/api/v1.0/aggregated_person';

// Create a horizontal bar chart when the document is ready
anychart.onDocumentReady(function() {
    // Fetch JSON data from the specified URL
    fetch(url4)
        .then(response => response.json())
        .then(data => {
            // Sort the data by Age_Group in ascending order
            data.sort((a, b) => a['Age_Group'].localeCompare(b['Age_Group']));

            // Calculate the total number of fatal and non-fatal accidents
            const totalFatal = data.reduce((acc, entry) => acc + entry['Fatal Accident'], 0);
            const totalNonFatal = data.reduce((acc, entry) => acc + entry['Non Fatal Accident'], 0);

            // Log the fetched data for debugging
            console.log('Data fetched successfully:', data);

            // Define a chart instance and specify the chart type (horizontal bar chart)
            const chart = anychart.bar();

            // Enable animation for a smoother appearance
            chart.animation(true);

            // Create a series for Fatal Accidents and set its name
            const fatalAccidentsSeries = chart.bar(data.map(entry => [entry['Age_Group'], entry['Fatal Accident']]));
            fatalAccidentsSeries.name("Fatal Accidents");

            // Create a series for Non-Fatal Accidents and set its name
            const nonFatalAccidentsSeries = chart.bar(data.map(entry => [entry['Age_Group'], entry['Non Fatal Accident']]));
            nonFatalAccidentsSeries.name("Non-Fatal Accidents");

            // Define the chart title with the total counts
            //chart.title(`Total Fatal Accidents: ${totalFatal} / Total Non-Fatal Accidents: ${totalNonFatal}`);

            // Define the title for the x-axis (Age_Group)
            chart.xAxis().title("Age Group");

            // Define the x-axis title and labels
            chart.yAxis()
                .title("Number of Accidents")
                .labels();

            // enable legend
            var legend = chart.legend();
            legend.enabled(true);

            // Set the background color of the chart to make it opaque
            chart.background().fill("rgba(255, 255, 255, 0.4)");

            // Render the chart in the specified container
            chart.container("ageGroupBarChart");

            // Draw the chart
            chart.draw();
        });
});