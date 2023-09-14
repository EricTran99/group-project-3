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
        f"/api/v1.0/accident<br/>"
    )

@app.route("/api/v1.0/accident")
def accident():
    query = engine.execute('Select * from "accident"')
    accident_list=[]
    for row in query:
        accident_dict={ 'ACCIDENT_NO':row[0],
                        'ACCIDENTDATE':row[1],
                        'NO_PERSONS':row[2],
                        'NO_PERSONS_KILLED':row[3],
                        }
        accident_list.append(accident_dict)
        
    response = jsonify(accident_list)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    app.run(debug=True)