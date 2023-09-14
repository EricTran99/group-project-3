from sqlalchemy import create_engine
from flask import Flask, jsonify
import pandas as pd
import numpy as np


port = 5432
username = "postgres"
password = "postgres"
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
        f"/api/v1.0/person<br/>"
        f"/api/v1.0/vehicle<br/>"
    )

@app.route("/api/v1.0/accident")
def accident():
    query = engine.execute('Select * from "accident"')
    accident_list=[]
    for row in query:
        accident_dict={'accident_no':row[0],
                        'date':row[1],
                        'time':row[2],
                        'accident_type':row[3],
                        'day_week_desc':row[4],
                        'light_cond':row[5],
                        'no_persons_killed':row[6],
                        'speed_zone':row[7],
                        'LGA_name':row[8],
                        'region_name':row[9],
                        'DEG_urban_name':row[10],
                        'coordinates':[row[11],row[12]],
                        'atmosph_cond':row[13],
                        'surface_cond':row[14]
                        }
        accident_list.append(accident_dict)
        
    response = jsonify(accident_list)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route("/api/v1.0/person")
def person():
    query = engine.execute('Select * from "person"')
    person_list=[]
    for row in query:
        person_dict={'accident_vehicle_id':row[0],
                     'sex':row[1],
                     'age_group':row[2],
                     'road_user_type':row[3]
                    }
        person_list.append(person_dict)
        
    response = jsonify(person_list)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route("/api/v1.0/vehicle")
def vehicle():
    query = engine.execute('Select * from "vehicle"')
    vehicle_list=[]
    for row in query:
        vehicle_dict={'accident_vehicle_id':row[0],
                      'vehicle_body_style':row[1],
                      'vehicle_make':row[2],
                      'vehicle_model':row[3],
                      'vehicle_type_desc':row[4]
                      }
        vehicle_list.append(vehicle_dict)
        
    response = jsonify(vehicle_list)
    response.headers.add('Access-Control-Allow-Origin','*')
    return response

if __name__ == '__main__':
    app.run(debug=True)