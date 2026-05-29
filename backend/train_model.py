import pandas as pd

import joblib

from sklearn.linear_model import LinearRegression

# LOAD ALL DATASETS

bangalore = pd.read_csv('datasets/Bangalore.csv')
chennai = pd.read_csv('datasets/Chennai.csv')
delhi = pd.read_csv('datasets/Delhi.csv')
hyderabad = pd.read_csv('datasets/Hyderabad.csv')
kolkata = pd.read_csv('datasets/Kolkata.csv')
mumbai = pd.read_csv('datasets/Mumbai.csv')

# ADD CITY COLUMN

bangalore['City'] = 'Bangalore'
chennai['City'] = 'Chennai'
delhi['City'] = 'Delhi'
hyderabad['City'] = 'Hyderabad'
kolkata['City'] = 'Kolkata'
mumbai['City'] = 'Mumbai'

# COMBINE ALL

df = pd.concat([

    bangalore,
    chennai,
    delhi,
    hyderabad,
    kolkata,
    mumbai

])

# KEEP REQUIRED COLUMNS

df = df[[

    'Price',
    'Area',
    'No. of Bedrooms',
    'Gymnasium',
    'SwimmingPool',
    'School',
    'Hospital',
    'CarParking',
    'LiftAvailable',
    'City'

]]

# REMOVE EMPTY VALUES

df = df.dropna()

# CONVERT CITY TO NUMBERS

city_mapping = {

    'Bangalore': 0,
    'Chennai': 1,
    'Delhi': 2,
    'Hyderabad': 3,
    'Kolkata': 4,
    'Mumbai': 5

}

df['City'] = df['City'].map(city_mapping)

# INPUT FEATURES

X = df[[

    'Area',
    'No. of Bedrooms',
    'Gymnasium',
    'SwimmingPool',
    'School',
    'Hospital',
    'CarParking',
    'LiftAvailable',
    'City'

]]

# TARGET

y = df['Price']

# TRAIN MODEL

model = LinearRegression()

model.fit(X, y)

# SAVE MODEL

joblib.dump(model, 'model.pkl')

print("MODEL TRAINED SUCCESSFULLY")