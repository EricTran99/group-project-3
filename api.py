from sqlalchemy import create_engine
from flask import Flask, jsonify
import pandas as pd
import numpy as np


port = 5432
username = "postgres"
password = "Hardline13#"
db_name = "project_db"

# install psycopg2 with "pip install psycopg2" 

db_connection_string = f"postgresql+psycopg2://{username}:{password}@localhost:{port}/{db_name}"
engine = create_engine(db_connection_string)

app = Flask(__name__)


@app.route("/")
def homepage():
    #returning information about routes on homepage
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/aggregated_person<br/>"
        f"/api/v1.0/aggregated_accident<br/>"
    )

@app.route("/api/v1.0/aggregated_person")
def aggregated_person():
    query = engine.execute('Select * from "aggregated_person"')
    aggregated_person_list=[]
    for row in query:
        aggregated_person_dict={ 'Age_Group':row[0],
                        'Fatal Accident':row[1],
                        'Non Fatal Accident':row[2],
                        'Total':row[3],
                        }
        aggregated_person_list.append(aggregated_person_dict)
    response = jsonify(aggregated_person_list)

@app.route("/api/v1.0/aggregated_accident")
def aggregated_accident():
    query = engine.execute('Select * from "aggregated_accident"')
    aggregated_accident_list=[]
    for row in query:
        aggregated_accident_dict={ 
                        'DEG_URBAN_NAME':row[0],
                        'Total_Accident':row[1],
                        'Total_Person':row[2],
                        'Fatal_Accident':row[3],
                        'Non_Fatal_Accident':row[4],
                        'Percentage_Fatal':row[5],
                        'Percentage_Non_Fatal':row[6]
                        }
        aggregated_accident_list.append(aggregated_accident_dict)
    response = jsonify(aggregated_accident_list)

    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    app.run(debug=True)