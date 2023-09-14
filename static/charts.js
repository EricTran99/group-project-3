const url = "http://127.0.0.1:5000/api/v1.0/counts"

function BarChart(input) {
    d3.json(url).then(function(data) {
        let year = input[0];
        let option = input[1];
        let Data = data[0]
        let feature_data=''
        if (option=='DEGS'){
            feature_data=Data.DEGS 
        }
        else if (option=='LGA'){
            feature_data=Data.LGA 
        }
        else if (option=='Region'){
            feature_data=Data.region
        }
        else if (option=='Atmospheric Condition'){
            feature_data=Data.atmos_cond
        }
        else if (option=='Surface Condition'){
            feature_data=Data.surface_cond
        }
        else if (option=='Light Condition'){
            feature_data=Data.light_cond
        }
        else if (option=='Speed Zone'){
            feature_data=Data.speed_zone
        }
        else if (option=='Age Group'){
            feature_data=Data.age_group
        }
        else if (option=='Vehicle Type'){
            feature_data=Data.vehicle_type
        }
        else if (option=='Vehicle Brand'){
            feature_data=Data.vehicle_brand
        }
        let feature_data_year_x = [];
        let feature_data_year_y = [];
        for (const [key, value] of Object.entries(feature_data)){
            if (key.slice(-4)==year){
                feature_data_year_x.push(key);
                feature_data_year_y.push(value);
            }
        }
        for (let i=0;i<feature_data_year_x.length;i++){
            feature_data_year_x[i]=feature_data_year_x[i].toLowerCase()
            feature_data_year_x[i]=feature_data_year_x[i].substring(0, feature_data_year_x[i].length-5)
            if (option=='DEGS'){
                feature_data_year_x[i] = feature_data_year_x[i].replace("_", " ")
                if (feature_data_year_x[i]=="large provincial_cities"){
                    feature_data_year_x[i]="large provincial cities"
                }
            }
        }
        // if (option=='LGA'){
        //     for (let i=0;i<feature_data_year_y;i++){
        //         if (){

        //         }
        //     }
        // }
            let bar_data = [{
                x: feature_data_year_y,
                y: feature_data_year_x,
                type: "bar",
                orientation:'h'
            }];
            let layout = {
                yaxis: {
                    automargin: true
                  }
              }
            Plotly.newPlot("bar", bar_data,layout);
        }
    )};


// // Assigning variable to div with class = selDatasetFeat
let dropdownMenuFeat = d3.select("#selDatasetFeat");

let dropdownMenuYear = d3.select("#selDatasetYear");

function optionChanged(){
    // Finding option chosen
    let feature = dropdownMenuFeat.property("value");
    let year = dropdownMenuYear.property("value");
    // Calling functions for option 
    BarChart([year,feature]);
}


// This function plots default charts for when the page is vistited 
function init(){
    // Plotting default charts 
    BarChart(['2020','DEGS']);
    // Put options in the dropdown menu 
    years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
    features=['DEGS','LGA','Region','Atmospheric Condition','Surface Condition','Light Condition','Speed Zone','Age Group','Vehicle Type','Vehicle Brand']
    for (let i = 0;i<features.length;i++){
        dropdownMenuFeat.append("option").text(features[i]);
    }
    for (let i = 0;i<years.length;i++){
        dropdownMenuYear.append("option").text(years[i]);
    }
};

init()