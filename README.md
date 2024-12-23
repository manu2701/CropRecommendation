# Crop Recommendation System

## Overview
The Crop Recommendation System is a machine learning solution designed to predict the most suitable crop for cultivation based on soil and environmental parameters. By leveraging advanced machine learning techniques, this system achieves exceptional accuracy, making it a reliable tool for farmers and agricultural experts.

### Highlights
- **Random Forest Classifier:** Achieved an impressive accuracy of **99%**.
- **XGBoost Classifier:** Delivered robust performance with **97.5% accuracy**.
- **Logistic Regression:** Provided a strong baseline with **95% accuracy**.

## Dataset
The dataset, `Crop_recommendation.csv`, contains the following key features:

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

## Dependencies
Ensure you have Python 3.8+ installed along with the following libraries:

- `pandas`
- `numpy`
- `matplotlib`
- `seaborn`
- `scikit-learn`
- `xgboost`
- `joblib`

Install the dependencies using:
```bash
pip install pandas numpy matplotlib seaborn scikit-learn xgboost joblib
```

## Development Workflow

### 1. Data Preprocessing
- Load the dataset using Pandas.
- Handle missing values by filling numeric columns with the median.
- Add a derived feature: `NPK_sum` = `N + P + K`.
- Standardize numeric features using `StandardScaler` for uniform scaling.

### 2. Exploratory Data Analysis (EDA)
- **Visualizations:**
  - Pairwise relationships between features and crop labels using `seaborn.pairplot`.
  - Feature importance analysis using the Random Forest Classifier.
- **Summary Statistics:**
  - Key statistics like mean, median, and standard deviation to understand the data distribution.

### 3. Model Training

#### **Random Forest Classifier**
- Trained using 80-20 train-test split.
- Achieved an accuracy of **99%** with consistent performance across metrics.
- Evaluated using:
  - Accuracy
  - Classification Report
  - Cross-Validation (5-fold)
  - ROC-AUC Curve for multi-class classification.

#### **XGBoost Classifier**
- Achieved an accuracy of **97.5%**.
- Offers competitive performance and serves as an excellent alternative to Random Forest.

#### **Logistic Regression**
- Achieved an accuracy of **95%**.
- Provides a strong baseline for comparison.

### 4. Model Evaluation
- **Metrics:**
  - Accuracy
  - Precision, Recall, F1-Score
  - ROC-AUC Curves
  - Confusion Matrix
- **Visualization:**
  - Distribution of predictions vs actual labels.
  - Feature importance ranking.

### 5. Model Persistence
Save essential components for future use:
- `scaler.pkl`: StandardScaler for feature scaling.
- `label_encoder.pkl`: LabelEncoder for crop labels.
- `random_forest.pkl`: Trained Random Forest model.

### 6. Feature Selection
Identified top 5 features based on importance rankings:
1. `NPK_sum`
2. `temperature`
3. `humidity`
4. `rainfall`
5. `ph`

These features can be used to optimize the model further or reduce computation time.

## How to Run
1. Place the `Crop_recommendation.csv` file in the same directory as the script.
2. Execute the script:
   ```bash
   python crop_recommendation.py
   ```
3. Saved models and scalers can be loaded for predictions:
   ```python
   import joblib
   model = joblib.load('random_forest.pkl')
   scaler = joblib.load('scaler.pkl')
   label_encoder = joblib.load('label_encoder.pkl')
   ```

## Results
### Random Forest Classifier
- **Accuracy:** 99%
- **Key Observations:**
  - Excellent precision and recall across all crop categories.
  - Robust multi-class ROC-AUC curves with high AUC scores.

### XGBoost Classifier
- **Accuracy:** 97.5%
- **Key Observations:**
  - Competitive performance with slightly reduced accuracy compared to Random Forest.

### Logistic Regression
- **Accuracy:** 95%
- **Key Observations:**
  - Reliable baseline model but less effective in capturing complex relationships compared to ensemble methods.

## Key Insights
- **Feature Importance:** The derived feature `NPK_sum` was the most significant predictor for crop recommendations, followed by `temperature`, `humidity`, `rainfall`, and `ph`.
- **Model Performance:** Ensemble methods like Random Forest and XGBoost demonstrated superior accuracy and generalizability compared to Logistic Regression.
- **Class Distribution:** Visualizing predictions and actual labels confirmed consistent model performance across all crop categories.

## Future Improvements
1. **Data Augmentation:**
   - Incorporate additional features like soil type and weather forecast data.
2. **Hyperparameter Tuning:**
   - Use GridSearchCV or RandomizedSearchCV to optimize model parameters further.
3. **Real-Time Integration:**
   - Develop a web-based or mobile interface for real-time crop prediction.
4. **Explainability:**
   - Use SHAP (SHapley Additive exPlanations) to provide interpretability of model predictions.

## Contact
For queries or suggestions, please contact [Your Email/Name].


