import pandas as pd
from sqlalchemy import create_engine


# Importing csv's

aggregated_person_path = "Cleaned_Aggregated_Datasets/aggregated_person.csv"
aggregated_accident_path = "Cleaned_Aggregated_Datasets/aggregated_accident.csv"

# converting to pandas dataframes

aggregated_person = pd.read_csv(aggregated_person_path,low_memory=False)
aggregated_accident = pd.read_csv(aggregated_accident_path,low_memory=False)

aggregated_person = aggregated_person[[
                    'Age_Group',
                    'Fatal Accident',
                    'Non Fatal Accident',
                    'Total'
                    ]]

aggregated_accident = aggregated_accident[[
                    'DEG_URBAN_NAME',
                    'Total_Accident',
                    'Total_Person',
                    'Fatal_Accident',
                    'Non_Fatal_Accident',
                    'Percentage_Fatal',
                    'Percentage_Non_Fatal',
                    ]]

# Create a postgres database and call it project_db
# Making connection to postgresql db

port = 5432            
username = "postgres"  
password = "Hardline13#"
db_name = "project_db"

db_connection_string = f"postgresql+psycopg2://{username}:{password}@localhost:{port}/{db_name}"
engine = create_engine(db_connection_string)


# using ".to_sql(table_name, engine, if_exists='append', index=False)" we can append data to tables in sql db
aggregated_person.to_sql("aggregated_person", engine, if_exists='replace', index=False)
aggregated_accident.to_sql("aggregated_accident", engine, if_exists='replace', index=False)



