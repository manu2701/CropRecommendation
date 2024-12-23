import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setPrediction("");
    setError("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setError("An error occurred while fetching the recommendation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header text-center">
        <h1>🌾 Crop Recommendation System</h1>
        <p className="subtitle">
          Provide soil and weather details to get the most suitable crop for your field.
        </p>
      </header>
      <div className="container form-container shadow-lg p-4">
        <form onSubmit={handleSubmit}>
          <h4 className="form-title">Input Data</h4>
          {["N", "P", "K", "temperature", "humidity", "ph", "rainfall"].map((field) => (
            <div className="form-group mb-3" key={field}>
              <label className="form-label">{field.toUpperCase()}</label>
              <input
                type="number"
                name={field}
                className="form-control"
                placeholder={`Enter ${field}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            disabled={loading}
          >
            {loading ? "Processing..." : "Get Recommendation"}
          </button>
        </form>

        {error && (
          <div className="alert alert-danger mt-4 text-center">
            <strong>Error:</strong> {error}
          </div>
        )}
        {prediction && (
          <div className="alert alert-success mt-4 text-center">
            <strong>Recommended Crop:</strong> {prediction}
          </div>
        )}
      </div>
      <footer className="text-center mt-5">
        <small className="text-muted">
          © {new Date().getFullYear()} Crop Recommendation System | Internship Project 🌱
        </small>
      </footer>
    </div>
  );
};

export default App;
