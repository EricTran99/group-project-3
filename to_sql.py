import pandas as pd
from sqlalchemy import create_engine


# Importing csv's

accident_path = "Cleaned_datasets/master_accident_cleaned.csv"

# converting to pandas dataframes

accident = pd.read_csv(accident_path,low_memory=False)

accident = accident[['ACCIDENT_NO',
                    'ACCIDENTDATE',
                    'NO_PERSONS',
                    'NO_PERSONS_KILLED',
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
accident.to_sql("accident", engine, if_exists='replace', index=False)




