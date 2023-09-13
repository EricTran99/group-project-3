# group-project-3
## Data Visualisation Victoria Road Accidents 2006 to 2020
### Project Team 9: Jack Hastings, Eric Tran, Akbar Fadillah and Katharine Tamas

In this scenario, our team has built an interactive web application, displaying various maps and charts representing Victorian road accidents from 2006 to 2020. This involved the creation of an ETL (Extract, Transform, Load) Pipeline. Crash Data was sourced from the DataVIC website (https://discover.data.vic.gov.au/dataset/crash-stats-data-extract) in the form of CSV files. The CSV files were cleaned and exploratory analysis was performed in Jupyter Notebook. An Entity Relationship Diagram (ERD) was created, along with a table schema, before uploading the data into a Postgres database. Python Flash-powered APIs were created. Finally, the web application was built using HTML, CSS and Javascript coding.

**Repository Folders and Contents:**
- Cleaned_Datasets:
  - accident_cleaned.csv
  - atmospheric_cond_cleaned.csv
  - master_accident_cleaned.csv
  - node_cleaned.csv
  - person_cleaned.csv
  - road_surface_cond_cleaned.csv
  - vehicle_cleaned.csv
- Cleaning_Scripts:
  - accident_cleaned.ipynb
  - accident_master_cleaned.ipynb
  - atmospheric_cond_cleaned.ipynb
  - node_cleaned.ipynb
  - person_cleaned.ipynb
  - road_surface_cond_cleaned.ipynb
  - vehicle_cleaned.ipynb
- Datasets:
  - ACCIDENT.csv
  - ATMOSPHERIC_COND.csv
  - NODE.csv
  - PERSON.csv
  - ROAD_SURFACE_COND.csv
  - VEHICLE.csv
- ERD:
  - QuickDBD-VIC ROAD ACCIDENTS DATA 1_1_2006 to 1_11_2020.pdf
  - QuickDBD-VIC ROAD ACCIDENTS DATA 1_1_2006 to 1_11_2020.png
  - QuickDBD-VIC ROAD ACCIDENTS DATA 1_1_2006 to 1_11_2020.sql
- Exploratory_Analysis_Output:
  - all_age_barchart.png
  - all_age_horizontal_barchart.png
  - fatal_age_barchart.png
  - fatal_region_piechart.png
  - fatal_urban_piechart.png
  - nonfatal_age_barchart.png
  - nonfatal_region_piechart.png
  - nonfatal_urban_piechart.png
  - road_accidents_linechart.png
  - road_accidents_map_DEG_URBAN_NAME.png
  - road_accidents_map_REGION_NAME.png
- Exploratory_Analysis_Scripts:
  - Charts_Road_Fatalities.ipynb
  - Map_Road_Fatalities.ipynb


## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Installing](#installing)
- [Contributing](#contributing)

## About
### Part 1: Clean Data and Perform Exploratory Analysis

At the beginning, we used Jupyter Notebook to import six CSV files, that were cleaned, manipulatedand merged to create three dataframes. The dataframes were then exported into csv files. Exploratory Analysis was performed to gain an understanding of the data and possible charts and maps to display on the final web application. The key insights we discovered were:
1. With the exception of 2020, the number of road accidents has not changed since 2006, indicating that more needs to be done to improve this.
2. Most fatal road accidents occur in rural victoria, whilst the majority of non fatal road accidents occur in urban settings.
3. Age bracket 30-39 persons are most likely to be in fatal and non fatal accidents
4. Fatal accidents are most likely to occur on a Saturday or Sunday depending on the year, whereas non fatal accidents are more likely to be on a weekday.
5. March is the worst month generally for road accidents, fatal and non fatal.
6. Most fatal accidents occur in 100 speed zone, which coincides with the the majority of fatal accidents occuring in rural victoria where the majority of roads have a 100+ speed zone.
7. Most non fatal accidents occur in 60 speed zone, which coincides with the majority of non fatal accidents occuring in urban settings where the majority of roads have a 60 speed zone.

**Resource Files We Used:**
  - ACCIDENT.csv
  - ATMOSPHERIC_COND.csv
  - NODE.csv
  - PERSON.csv
  - ROAD_SURFACE_COND.csv
  - VEHICLE.csv

**Our Jupyter Notebook Python Cleaning Scripts:**
  - accident_cleaned.ipynb
  - accident_master_cleaned.ipynb
  - atmospheric_cond_cleaned.ipynb
  - node_cleaned.ipynb
  - person_cleaned.ipynb
  - road_surface_cond_cleaned.ipynb
  - vehicle_cleaned.ipynb

**Cleaned Files We Created:**
  - accident_cleaned.csv
  - atmospheric_cond_cleaned.csv
  - master_accident_cleaned.csv
  - node_cleaned.csv
  - person_cleaned.csv
  - road_surface_cond_cleaned.csv
  - vehicle_cleaned.csv

**Our Exploratory Analysis Scripts**:
  - Charts_Road_Fatalities.ipynb
  - Map_Road_Fatalities.ipynb
  - 
**Exploratory Analysis Images Created**:
  - all_age_barchart.png
  - all_age_horizontal_barchart.png
  - fatal_age_barchart.png
  - fatal_region_piechart.png
  - fatal_urban_piechart.png
  - nonfatal_age_barchart.png
  - nonfatal_region_piechart.png
  - nonfatal_urban_piechart.png
  - road_accidents_linechart.png
  - road_accidents_map_DEG_URBAN_NAME.png
  - road_accidents_map_REGION_NAME.png

**Tools/Libraries We Imported:**
   - pandas library: for data manipulation and analysis
NEED TO ADD HERE


### Part 2: Create the Project Database and Import Data

In this section, using QuickDBD, we sketched an ERD to form a table schema of the three CSV files we created in Part 1 above. We identified the dependencies between each table (primary and foreign keys), their relationships (one-one/one-many, many-one) and the relevant datatypes for each column. We created a SQL database (crowdfunding_db) in Postgres through pgAdmin. Table Schema sql file generated through our ERD diagram in QuickDBD was uploaded to create table structure and dependencies. csv files generated in Part 1 were imported into relevant tables using python code using python SQLAlchemy in Juypter Notebook. Select queries were run both in pgAdmin and python.

**Files We Created:**
 - Schema: QuickDBD-VIC ROAD ACCIDENTS DATA 1_1_2006 to 1_11_2020.sql
 - ERD Diagram: QuickDBD-VIC ROAD ACCIDENTS DATA 1_1_2006 to 1_11_2020.png

**ERD Diagram:**

![QuickDBD-VIC ROAD ACCIDENTS DATA 1_1_2006 to 1_11_2020](https://github.com/Nisloen/group-project-3/assets/132874272/30eae2a9-fd5c-4002-a01e-f80679369893)

**Resource Files We Used:**
  - master_accident_cleaned.csv
  - person_cleaned.csv
  - vehicle_cleaned.csv

**Our Jupyter Notebook Python Script:**
  - Populating_crowdfunding_db_tables.ipynb

**Our SQL Script with SELECT statement used in pgAdmin:**
  - Select_statements.sql
    
### Part 3: Create the Flask Powered APIs
  
**Tools/Libraries We Imported:**
   - pandas library: for data manipulation and analysis
   - sqlalchemy library: provides the SQL toolkit and Object-Relational Mapper (ORM) functionality. The create_engine function is to create a database engine to connect with the database in order to interact with the database, and perform operations such as SQL queries

### Part 4: Create the Web Application

## Getting Started

**Programs/software we used:**
 - Jupyter Notebook: used for python coding in sections.
 - Microsoft Excel: to view csv files. Should be available by default on all PCs.
 - QuickDBD: to sketch an ERD of the tables for the data contained in the csv files. (http://www.quickdatabasediagrams.com/) No need to register, diagram can be generated on the website for free.
 - PostgreSQL: is a relational database management system (RDBMS). An RDBMS consists of tables and their predefined relationships. Postgres stores the data. Refer to "Installing" section below.
 - pgAdmin: The pgAdmin tool functions as the window into the database. It's where queries are written, run and then the results of running them are reviewed. pgAdmin provides access to that data. Refer to "Installing" section below.


**To open the files .ipynb files in Juypter Notebook:**
- Open Anaconda Prompt
- Activate dev environment, type 'conda activate dev'
- Navigate to the folder where repository is saved on local drive
- Open Jupyter Notebook, type 'Jupyter Notebook'

## Installing

**Installation PostgreSQL & pgAdmin:**
 - In your browser, go to Download PostgreSQLLinks: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads.
 - Select the download option for your operating system and the latest version 14.x of PostgreSQL.
 - After downloading the latest version of PostgreSQL 14.x, double-click the postgresql-14.7-2-windows-x64.exe file. Note: The exact file version may be slightly different.
 - Go through the Setup Wizard and install PostgreSQL. Keep the default location C:\Program Files\PostgreSQL\14.
 - Select the components to be installed. Uncheck the option to install Stack Builder.
 - Add your data directory. Keep the default location C:\Program Files\PostgreSQL\14\data.
 - Enter postgres as the password. Be sure to record this password for future use.
 - Keep the default port as 5432. In the Advanced Options, set the locale as [Default locale].
 - The final screen will be the Pre Installation Summary.
 - When you are done, the Postgres 14 folder can be accessed from the Start menu of your computer.
 - This folder contains the pgAdmin 4 application.
 - To confirm the installation, start pgAdmin (this will open in a new browser window). Connect to the default server by clicking on it and entering the password if prompted.

**Installation psycopg2:**
- after activating dev environment in Anaconda Prompt (see Getting Started above), type: "pip install psycopg2"


## Contributing

- How to import csv data to sql: https://www.askpython.com/python-modules/pandas/pandas-to-sql

