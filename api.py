
from sqlalchemy import create_engine
from flask import Flask, jsonify
import pandas as pd
import numpy as np
from flask_cors import CORS

port = 5432
username = "postgres"
password = "postgres"
db_name = "project_db"

# install psycopg2 with "pip install psycopg2" in env if you haven't

db_connection_string = f"postgresql+psycopg2://{username}:{password}@localhost:{port}/{db_name}"
engine = create_engine(db_connection_string)

app = Flask(__name__)
CORS(app)

@app.route("/")
def homepage():
    #returning information about routes on homepage
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/accidents<br/>"
    )

@app.route("/api/v1.0/accidents")
def accidents():
    query = engine.execute('Select * from "NODE"')
    coordinates_list=[]
    for row in query:
        coordinates_dict={}
        coordinates_dict[row[0]]=[row[1],row[2]]
        coordinates_list.append(coordinates_dict)
    return (jsonify(coordinates_list))

if __name__ == '__main__':
    app.run(debug=True)