from flask import Flask, request, jsonify
import joblib
import numpy as np


# Load the saved Random Forest model and preprocessors
model = joblib.load('random_forest.pkl')
scaler = joblib.load('scaler.pkl')
label_encoder = joblib.load('label_encoder.pkl')

features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def home():
    return "Crop Recommendation Backend is running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json()
        if not all(feature in input_data for feature in features):
            return jsonify({'error': 'Invalid input data. Missing features.'}), 400
        npk_sum = input_data['N'] + input_data['P'] + input_data['K']
        input_features = [input_data[feature] for feature in features]
        input_features.append(npk_sum)
        input_features_scaled = scaler.transform([input_features])
        prediction_encoded = model.predict(input_features_scaled)
        predicted_crop = label_encoder.inverse_transform(prediction_encoded)[0]
        return jsonify({'prediction': predicted_crop})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
