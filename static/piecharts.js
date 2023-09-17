// Define the data URL
const url3 = 'http://127.0.0.1:5000/api/v1.0/aggregated_accident';

// Create a pie chart when the document is ready
anychart.onDocumentReady(function() {
    // Fetch JSON data from the specified URL
    fetch(url3)
        .then(response => response.json())
        .then(data => {
            // Log the fetched data for debugging
            console.log('Data fetched successfully:', data);

            // Create an AnyChart data view from the JSON array
            const dataSet = anychart.data.set(data);

            // Define a chart instance and specify the chart type (pie chart)
            const chart = anychart.pie(data);

            var mapping = dataSet.mapAs({x: "DEG_URBAN_NAME", value: "Fatal_Accident"});

            // Enable animation for a smoother appearance
            chart.animation(true);

            // Set chart data using the data view
            chart.data(dataSet);

            // Define the mapping for the chart labels and values
            chart.labels().position('outside');
            chart.labels().format('{%DEG_URBAN_NAME}: {%Fatal_Accident}%');

            // Set chart title
            chart.title('Fatal Accident by Urban Category');

            // Customize legend settings
            chart.legend()
                .position('center-bottom') // Position of the legend
                .itemsLayout('horizontal') // Layout of legend items
                .align('center'); // Alignment of the legend

            // Set container id for the chart
            chart.container('container');

            // Initiate chart drawing
            chart.draw();
        })
 });
