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
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    app.run(debug=True)