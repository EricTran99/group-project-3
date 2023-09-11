-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/IxrtGi
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


-- lists all accidents (203,708 rows)
CREATE TABLE "ACCIDENT" (
    -- unique accident numbers
    "ACCIDENT_NO" varchar(20)   NOT NULL,
    -- date accident occurred dd/mm/yyyy
    "ACCIDENTDATE" date   NOT NULL,
    -- time accident occurred hh:mm:ss
    "ACCIDENTTIME" time   NOT NULL,
    -- type of accident (1 to 9)
    "ACCIDENT_TYPE" int   NOT NULL,
    -- description of accident type associated with ACCIDENT_TYPE eg. Collision with vehicle
    "Accident_Type_Desc" varchar(50)   NOT NULL,
    -- day of the week (1 to 7) where 1 = Sunday
    "DAY_OF_WEEK" int   NOT NULL,
    -- decription of day of week associated with DAY_WEEK eg. Sunday
    "Day_Week_Description" varchar(10)   NOT NULL,
    -- Definition for Classifying Accidents eg. 111, 163
    "DCA_CODE" int   NOT NULL,
    -- Description for DCA_CODE eg. RIGHT NEAR (INTERSECTIONS ONLY)
    "DCA_Description" varchar(70)   NOT NULL,
    -- map directory eg. MEL (contains blanks)
    "DIRECTORY" varchar   NOT NULL,
    -- edition of map eg. 40 (contains blanks)
    "EDITION" int   NOT NULL,
    -- page of map eg. 91A (contains blanks)
    "PAGE" varchar(5)   NOT NULL,
    -- map grid reference on x axis eg G, H (contains blanks)
    "GRID_REFERENCE_X" varchar(5)   NOT NULL,
    -- map grid reference on y axis eg 7, 8 (contains blanks)
    "GRID_REFERENCE_Y" varchar(5)   NOT NULL,
    -- light condition at ttime of accident (1 to 9)
    "LIGHT_CONDITION" int   NOT NULL,
    -- description of LIGHT_CONDITION eg. day, dark street no lights etc
    "Light_Condition_Description" varchar(20)   NOT NULL,
    -- pinpoint location on map
    "NODE_ID" int   NOT NULL,
    -- number of vehicles involved in the accident (1 tp 21)
    "NO_VEHICLE" int   NOT NULL,
    -- number of people involved in the accident (1 to 97)
    "NO_PERSONS" int   NOT NULL,
    -- number of people injured in the accident (0 to 17)
    "NO_PERSONS_INJ_2" int   NOT NULL,
    -- number of people injured in the accident (0 to 43)
    "NO_PERSONS_INJ_3" int   NOT NULL,
    -- number of people killed in the accident (0 to 11)
    "NO_PERSONS_KILLED" int   NOT NULL,
    -- number of people not injured in the accident (0 to 87)
    "NO_PERSONS_NOT_INJ" int   NOT NULL,
    -- number of police officers attended accident (1 to 9)
    "POLICE_ATTEND" int   NOT NULL,
    -- location on road (1 to 9)
    "ROAD_GEOMETRY" int   NOT NULL,
    -- description of location on road eg. Cross intersection, T intersection
    "Road_Geometry_Desc" varchar(50)   NOT NULL,
    -- severity of accident (1 to 4) 1 = most severe, 4 = least severe
    "SEVERITY" int   NOT NULL,
    -- speed limit where accident occurred eg. 60, 100
    "SPEED_ZONE" int   NOT NULL,
    -- not type I, N or O (contains blanks and N/A)
    "NODE_TYPE" varchar(3)   NOT NULL,
    -- Local Government Area name (contains blanks and N/A)
    "LGA_NAME" varchar(50)   NOT NULL,
    -- Local Government Area name grouped for some (contains blanks and N/A)
    "LGA_NAME_ALL" varchar(50)   NOT NULL,
    -- Region in Victoria eg. METROPOLITAN SOUTH EAST REGION (contains blanks and N/A)
    "REGION_NAME" varchar(20)   NOT NULL,
    -- Location category in Victoria eg. MELB_URBAN, RURAL_VICTORIA
    "DEG_URBAN_NAME" varchar(20)   NOT NULL,
    -- accident latitude location (contains N/A)
    "Lat" int   NOT NULL,
    -- accident longitude location (contains N/A)
    "Long" int   NOT NULL,
    CONSTRAINT "pk_ACCIDENT" PRIMARY KEY (
        "ACCIDENT_NO"
     )
);

-- lists atmospheric conditions for each accident (206,958 rows)
CREATE TABLE "ATMOSPHERIC_COND" (
    -- not unique accident numbers
    "ACCIDENT_NO" varchar(20)   NOT NULL,
    -- atmospheric conditions (1 to 9)
    "ATMOSPH_COND" int   NOT NULL,
    -- sequence of atmospheric conditions for accident (0 t0 4) ie. can have more than one
    "ATMOSPH_COND_SEQ" int   NOT NULL,
    -- description of ATMOSPH_COND eg. Clear, Smoke, Snowing, Fog
    "Atmosph_Cond_Desc" varchar(10)   NOT NULL
);

-- lists the location of the accidents (221,787 rows)
CREATE TABLE "NODE" (
    -- not unique accident numbers
    "ACCIDENT_NO" varchar(20)   NOT NULL,
    "NODE_ID" int   NOT NULL,
    -- I, N, O (contains blanks)
    "NODE_TYPE" varchar(1)   NOT NULL,
    "VICGRID94_X" int   NOT NULL,
    "VICGRID94_Y" int   NOT NULL,
    -- Local Government Area name (contains blanks and N/A)
    "LGA_NAME" varchar(50)   NOT NULL,
    -- Local Government Area name grouped for some (contains blanks and N/A)
    "LGA_NAME_ALL" varchar(50)   NOT NULL,
    -- Region in Victoria eg. METROPOLITAN SOUTH EAST REGION (contains blanks and N/A)
    "REGION_NAME" varchar(20)   NOT NULL,
    -- Location category in Victoria eg. MELB_URBAN, RURAL_VICTORIA
    "DEG_URBAN_NAME" varchar(20)   NOT NULL,
    -- accident latitude location (contains N/A)
    "Lat" int   NOT NULL,
    -- accident longitude location (contains N/A)
    "Long" int   NOT NULL,
    -- postcode of accident location
    "POSTCODE_NO" int   NOT NULL
);

-- lists all the people involved in the accidents (490,949 rows)
-- NOTE: need to create key ACCIDENT_NO and VEHICLE_ID
CREATE TABLE "PERSON" (
    -- not unique accident numbers
    "ACCIDENT_NO" varchar(20)   NOT NULL,
    -- person in accident (1-95) (A-U)
    "PERSON_ID" varchar(5)   NOT NULL,
    -- vehicle in accident (A-U) (Contains blanks)
    "VEHICLE_ID" varchar(5)   NOT NULL,
    -- sex of person in accident (F, M, U) (Contains blanks)
    "SEX" varchar(10)   NOT NULL,
    -- age of person in accident (Contains blanks)
    "AGE" int   NOT NULL,
    -- age bracket AGE falls into (Contains date format and unknown)
    "Age_Group" varchar(10)   NOT NULL,
    -- injury severity of person in accident (1 to 4) 1 = Fatality, 4 = Not Injured (contains blanks)
    "INJ_LEVEL" int   NOT NULL,
    -- description of INJ_LEVEL eg. Fatality, Serious Injury, Not Injured
    "Inj_Level_Desc" varchar(20)   NOT NULL,
    -- position person seated in vehicle if applicable (contains blanks)
    "SEATING_POSITION" varchar(2)   NOT NULL,
    -- helmet or belt worn (1 to 9) (contains blanks)
    "HELMET_BELT_WORN" int   NOT NULL,
    -- type of road user (1 to 9) (contains blanks)
    "ROAD_USER_TYPE" int   NOT NULL,
    -- description of ROAD_USER_TYPE eg. Drivers, Passengers
    "Road_User_Type_Desc" varchar(20)   NOT NULL,
    -- (A to Z) (contains blanks)
    "LICENCE_STATE" varchar(5)   NOT NULL,
    -- (0 to 9) (contains blanks)
    "PEDEST_MOVEMENT" int   NOT NULL,
    -- postcode of person (contains blanks)
    "POSTCODE" int   NOT NULL,
    -- if person was taken to hospital eg. Y,N (contains blanks)
    "TAKEN_HOSPITAL" varchar(5)   NOT NULL,
    -- (0 to 9) (contains blanks)
    "EJECTED_CODE" int   NOT NULL
);

-- lists road surface conditions at time of accident (205,030 rows)
CREATE TABLE "ROAD_SURFACE_COND" (
    -- not unique accident numbers
    "ACCIDENT_NO" varchar(20)   NOT NULL,
    -- surface condition at time of accident (1 to 9)
    "SURFACE_COND" int   NOT NULL,
    -- description of SURFACE_COND eg. Dry, Icy
    "Surface_Cond_Descr" varchar(10)   NOT NULL,
    -- sequence of surface condition (0 to 3) can be more than one per accident
    "SURFACE_COND_SEQ" int   NOT NULL
);

-- lists vehicles involved in accident (365,242 rows)
-- NOTE: need to create a key ACCIDENT_NO and VEHICLE_ID
CREATE TABLE "VEHICLE" (
    -- not unique accident numbers
    "ACCIDENT_NO" varchar(20)   NOT NULL,
    -- (A to U)
    "VEHICLE_ID" varchar(1)   NOT NULL,
    -- year vehicle manufactured YYYY (contains blanks, 0 and 4)
    "VEHICLE_YEAR_MANUF" date   NOT NULL,
    -- (1 to 8) (contains blanks)
    "VEHICLE_DCA_CODE" int   NOT NULL,
    -- inital direction of vehicle eg. NW, S, E
    "INITIAL_DIRECTION" varchar(2)   NOT NULL,
    -- (1 to 9)
    "ROAD_SURFACE_TYPE" int   NOT NULL,
    -- description of ROAD_SURFACE_TYPE
    "Road_Surface_Type_Desc" varchar(15)   NOT NULL,
    -- (A to Z) (contains blanks)
    "REG_STATE" varchar(4)   NOT NULL,
    -- vehicle body type eg. SEDAN, COUPE (contains blanks)
    "VEHICLE_BODY_STYLE" varchar(15)   NOT NULL,
    -- vehicle make eg. MITSUB, FORD, TOYOTA (contains blanks)
    "VEHICLE_MAKE" varchar(15)   NOT NULL,
    -- vehicle model eg. MAGNA, FAIRMT (contains blanks)
    "VEHICLE_MODEL" varchar(15)   NOT NULL,
    -- contains no data
    "VEHICLE_POWER" int   NOT NULL,
    -- vehicle type (1 to 99)
    "VEHICLE_TYPE" int   NOT NULL,
    -- description of VEHICLE_TYPE eg. Car, Taxi, Motor Cycle
    "Vehicle_Type_Desc" varchar(20)   NOT NULL,
    -- vehicle weight (many are blank)
    "VEHICLE_WEIGHT" int   NOT NULL,
    -- A, P or R (contains blanks)
    "CONSTRUCTION_TYPE" varchar(1)   NOT NULL,
    -- D to 7 (contains blanks)
    "FUEL_TYPE" varchar(1)   NOT NULL,
    -- 0 to 61 (contains blanks)
    "NO_OF_WHEELS" int   NOT NULL,
    -- 0 to 93 (contains blanks)
    "NO_OF_CYLINDERS" int   NOT NULL,
    -- 0 to 70 (contains blanks)
    "SEATING_CAPACITY" int   NOT NULL,
    -- tare weight vehicle (contains blanks)
    "TARE_WEIGHT" int   NOT NULL,
    -- number occupants in vehicle (0 to 96) (contains blanks)
    "TOTAL_NO_OCCUPANTS" int   NOT NULL,
    -- vehicle carry capacity (contains blanks)
    "CARRY_CAPACITY" int   NOT NULL,
    -- vehicle cubic capacity (contains blanks)
    "CUBIC_CAPCITY" int   NOT NULL,
    -- final direction of vehicle eg. NW, S, E
    "FINAL_DIRECTION" varchar(2)   NOT NULL,
    -- 1 to 99 (contains blanks)
    "DRIVER_INTENT" int   NOT NULL,
    -- 1 to 99 (contains blanks)
    "VEHICLE_MOVEMENT" int   NOT NULL,
    -- A to L (contains blanks)
    "TRAILER_TYPE" varchar(1)   NOT NULL,
    -- colour of vehicle
    "VEHICLE_COLOUR_1" varchar(3)   NOT NULL,
    -- colour of vehicle (contains blanks)
    "VEHICLE_COLOUR_2" varchar(3)   NOT NULL,
    -- 0 to 9
    "CAUGHT_FIRE" int   NOT NULL,
    -- numbers and letters
    "INITIAL_IMPACT" varchar(4)   NOT NULL,
    -- (0 to 9)
    "LAMPS" int   NOT NULL,
    -- (1 to 9)
    "LEVEL_OF_DAMAGE" int   NOT NULL,
    -- vehicle owner postcode (contains blanks)
    "OWNER_POSTCODE" int   NOT NULL,
    -- 1,2,9
    "TOWED_AWAY_FLAG" int   NOT NULL,
    -- 1 to 99
    "TRAFFIC_CONTROL" int   NOT NULL,
    -- description of TRAFFIC_CONTROL
    "Traffic_Control_Descr" varchar(20)   NOT NULL,
    CONSTRAINT "pk_VEHICLE" PRIMARY KEY (
        "VEHICLE_ID"
     )
);

ALTER TABLE "ATMOSPHERIC_COND" ADD CONSTRAINT "fk_ATMOSPHERIC_COND_ACCIDENT_NO" FOREIGN KEY("ACCIDENT_NO")
REFERENCES "ACCIDENT" ("ACCIDENT_NO");

ALTER TABLE "NODE" ADD CONSTRAINT "fk_NODE_ACCIDENT_NO" FOREIGN KEY("ACCIDENT_NO")
REFERENCES "ACCIDENT" ("ACCIDENT_NO");

ALTER TABLE "PERSON" ADD CONSTRAINT "fk_PERSON_ACCIDENT_NO" FOREIGN KEY("ACCIDENT_NO")
REFERENCES "ACCIDENT" ("ACCIDENT_NO");

ALTER TABLE "PERSON" ADD CONSTRAINT "fk_PERSON_VEHICLE_ID" FOREIGN KEY("VEHICLE_ID")
REFERENCES "VEHICLE" ("VEHICLE_ID");

ALTER TABLE "ROAD_SURFACE_COND" ADD CONSTRAINT "fk_ROAD_SURFACE_COND_ACCIDENT_NO" FOREIGN KEY("ACCIDENT_NO")
REFERENCES "ACCIDENT" ("ACCIDENT_NO");

ALTER TABLE "VEHICLE" ADD CONSTRAINT "fk_VEHICLE_ACCIDENT_NO" FOREIGN KEY("ACCIDENT_NO")
REFERENCES "ACCIDENT" ("ACCIDENT_NO");

