import pandas as pd
from sqlalchemy import create_engine


# Importing csv's
accident_path = "Resources/project_3_DATA/ACCIDENT.csv"
atmos_cond_path = "Resources/project_3_DATA/ATMOSPHERIC_COND.csv"
node_path = "Resources/project_3_DATA/NODE.csv"
person_path = "Resources/project_3_DATA/PERSON.csv"
road_surf_path = "Resources/project_3_DATA/ROAD_SURFACE_COND.csv"
vehicle_path = "Resources/project_3_DATA/VEHICLE.csv"



ACCIDENT = pd.read_csv(accident_path,dtype={
    'EDITION': 'string',
    'GRID_REFERENCE_X': 'string',
    'GRID_REFERENCE_Y': 'string'
})
ATMOSPHERIC_COND = pd.read_csv(atmos_cond_path)
NODE = pd.read_csv(node_path)
PERSON = pd.read_csv(person_path,dtype={
    'INJ_LEVEL': 'string',
    'HELMET_BELT_WORN': 'string',
    'ROAD_USER_TYPE': 'string',
    'PEDEST_MOVEMENT': 'string'
})
ROAD_SURFACE_COND = pd.read_csv(road_surf_path)
VEHICLE = pd.read_csv(vehicle_path,dtype={
    'VEHICLE_DCA_CODE': 'string',
    'DRIVER_INTENT': 'string',
    'VEHICLE_MOVEMENT': 'string',
    'TOWED_AWAY_FLAG': 'string',
    'TRAFFIC_CONTROL':'string'
})

# Create a postgres database and call if project_db
# Making connection to postgresql db

port = 5432             # enter your details if different
username = "postgres"  
password = "postgres"
db_name = "project_db"

db_connection_string = f"postgresql+psycopg2://{username}:{password}@localhost:{port}/{db_name}"
engine = create_engine(db_connection_string)


# using ".to_sql(table_name, engine, if_exists='append', index=False)" we can append data to tables in sql db
ACCIDENT.to_sql("ACCIDENT", engine, if_exists='replace', index=False)
ATMOSPHERIC_COND.to_sql("ATMOSPHERIC_COND", engine, if_exists='replace', index=False)
NODE.to_sql("NODE", engine, if_exists='replace', index=False)
PERSON.to_sql("PERSON", engine, if_exists='replace', index=False)
ROAD_SURFACE_COND.to_sql("ROAD_SURFACE_COND", engine, if_exists='replace', index=False)
VEHICLE.to_sql("VEHICLE", engine, if_exists='replace', index=False)



