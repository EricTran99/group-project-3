const url = ''

function BarChart(){
    d3.json(url).then(function(data) {
       
        
        let bar_data = [{
            x: ,
            y: ,
            text:,
            type: "bar"
        }];
        Plotly.newPlot("bar", bar_data);
})};

function Pie(){
    d3.json(url).then(function(data) {
        
        let pie_data = [{
            x: ,
            y: ,
            
        }];
        // Adding plot to div with id = "bubble" 
        Plotly.newPlot("pie", pie_data);
})};


// Assigning variable to div with class = selDataset
let dropdownMenu = d3.select("#selDataset");

function optionChanged(){
    // Finding option chosen
    let ID = dropdownMenu.property("value");
    // Calling functions for option 
    BarChart(ID);
    Bubble(ID);
    DemographicInfo(ID)
}


// This function plots default charts for when the page is vistited 
function init(){
    // Plotting default charts 
    BarChart();
    Pie()
    // Put options in the dropdown menu 
    d3.json(url).then(function(data) {
    
    })}
    
init()