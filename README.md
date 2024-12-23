# Crop Recommendation System

## 🌟 Overview
The **Crop Recommendation System** is a comprehensive solution that leverages **machine learning** to predict the most suitable crop for cultivation based on soil and environmental parameters. The project consists of:

- 🔮 **Machine Learning Model**: Trained using advanced algorithms like Random Forest, XGBoost, and Logistic Regression.
- 🖥️ **Backend**: A Flask server for real-time predictions.
- 🌐 **Frontend**: A user-friendly React-based interface for interaction.

This system achieves high accuracy and aims to empower farmers and agricultural experts with data-driven crop recommendations.

---

## ✨ Key Highlights
- **Random Forest Classifier**: Achieved an impressive accuracy of **99%**.
- **XGBoost Classifier**: Delivered robust performance with **97.5% accuracy**.
- **Logistic Regression**: Provided a strong baseline with **95% accuracy**.
- **Intuitive Web Interface**: A modern UI for seamless user interaction.
- **Real-Time Integration**: Flask backend connected to the ML model for instant recommendations.

---

## 🗂️ Dataset
The dataset, `Crop_recommendation.csv`, contains the following features:

### Features
1. **Nutrient Levels:**
   - `N` (Nitrogen)
   - `P` (Phosphorus)
   - `K` (Potassium)
2. **Environmental Factors:**
   - `temperature` (in °C)
   - `humidity` (percentage)
   - `ph` (pH level of the soil)
   - `rainfall` (in mm)
3. **Derived Feature:**
   - `NPK_sum` (sum of `N`, `P`, and `K`).
4. **Target Label:**
   - `label` (the recommended crop).

---

## 🔧 Tech Stack
### **Backend**
- Flask (Python)
- Joblib (Model Serialization)

### **Frontend**
- React.js
- Bootstrap (CSS Framework)

### **Machine Learning**
- Python Libraries: `pandas`, `numpy`, `matplotlib`, `seaborn`, `scikit-learn`, `xgboost`

---

## 🚀 System Architecture
1. **Frontend**: A React-based web app where users input soil and environmental parameters.
2. **Backend**: A Flask server that:
   - Preprocesses input data.
   - Loads the saved ML models.
   - Returns crop predictions to the frontend.
3. **Machine Learning**:
   - Pre-trained Random Forest Classifier deployed via Flask.
   - Features scaled using `StandardScaler` and encoded using `LabelEncoder`.

---

## 📊 Development Workflow

### 1. **Machine Learning**
#### Data Preprocessing
- Handle missing values by filling numeric columns with the median.
- Add a derived feature: `NPK_sum` = `N + P + K`.
- Standardize numeric features using `StandardScaler`.

#### Model Training
- **Random Forest Classifier**: Achieved an accuracy of **99%**.
- **XGBoost Classifier**: Delivered **97.5% accuracy**.
- **Logistic Regression**: Reliable baseline with **95% accuracy**.

#### Model Persistence
- `scaler.pkl`: StandardScaler for feature scaling.
- `label_encoder.pkl`: LabelEncoder for crop labels.
- `random_forest.pkl`: Trained Random Forest model.

### 2. **Backend Development**
- **Flask API Endpoints:**
  - `/predict`: Accepts JSON input, preprocesses it, and returns the recommended crop.
- **Error Handling:** Comprehensive error messages for invalid input or server issues.

### 3. **Frontend Development**
- Built with React.js for a modern, responsive UI.
- Form for user input and real-time display of predictions.
- Styled with Bootstrap for a clean, professional look.

---

## 🖥️ How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/manu2701/CropRecommendation.git
cd CropRecommendation
```

### 2. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment:
   ```bash
   python3 -m venv env
   source env/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the Flask server:
   ```bash
   python app.py
   ```
   The server runs on `http://127.0.0.1:5000/`.

### 3. Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The app runs on `http://localhost:3000/`.

---

## 📈 Results
### **Random Forest Classifier**
- **Accuracy:** 99%
- **Key Observations:**
  - Excellent precision and recall across all crop categories.
  - Robust multi-class ROC-AUC curves with high AUC scores.

### **XGBoost Classifier**
- **Accuracy:** 97.5%
- **Key Observations:**
  - Competitive performance with slightly reduced accuracy compared to Random Forest.

### **Logistic Regression**
- **Accuracy:** 95%
- **Key Observations:**
  - Reliable baseline model but less effective in capturing complex relationships compared to ensemble methods.

---

## 🎨 Future Improvements
1. **Feature Expansion:**
   - Include soil type and real-time weather data for better predictions.
2. **Model Optimization:**
   - Use advanced hyperparameter tuning methods like GridSearchCV.
3. **Explainability:**
   - Implement SHAP for explaining model predictions.
4. **Deployment:**
   - Host the system on cloud platforms like AWS or Heroku for wider accessibility.

---

## 📬 Contact
For any questions or suggestions, feel free to reach out:
- **Name:** Manu
- **Email:** [your-email@example.com](mailto:your-email@example.com)
- **GitHub:** [manu2701](https://github.com/manu2701)

