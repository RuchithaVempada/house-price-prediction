from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)

CORS(app)

# CITY BASE PRICE

city_price = {

    "Bangalore": 7000,
    "Chennai": 6500,
    "Delhi": 9000,
    "Hyderabad": 6000,
    "Kolkata": 5500,
    "Mumbai": 12000

}

@app.route('/')

def home():

    return "DreamHouse Backend Running Successfully"

@app.route('/predict', methods=['POST'])

def predict():

    try:

        data = request.get_json()

        # INPUTS

        city = data['city']

        property_type = data['propertyType']

        area = float(data['area'])

        bedrooms = float(data['bedrooms'])

        gym = float(data['gym'])

        pool = float(data['pool'])

        school = float(data['school'])

        hospital = float(data['hospital'])

        parking = float(data['parking'])

        lift = float(data['lift'])

        # BASE CITY PRICE

        base_price_per_sqft = city_price[city]

        # AREA PRICE

        predicted_price = area * base_price_per_sqft

        # PROPERTY TYPE

        if property_type == 1:

            # Villa

            predicted_price += 3000000

        else:

            # Apartment

            predicted_price += 1000000

        # BEDROOMS

        predicted_price += bedrooms * 500000

        # FEATURES

        if gym == 1:

            predicted_price += 300000

        if pool == 1:

            predicted_price += 700000

        if school == 1:

            predicted_price += 200000

        if hospital == 1:

            predicted_price += 200000

        if parking == 1:

            predicted_price += 250000

        if lift == 1:

            predicted_price += 150000

        # RANDOM MARKET VALUE

        predicted_price += random.randint(50000, 300000)

        return jsonify({

            "predicted_price": round(predicted_price, 2)

        })

    except Exception as e:

        return jsonify({

            "error": str(e)

        })

if __name__ == '__main__':

    app.run(debug=True)