import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaCalculator } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculatorSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f6f9fe;
  padding: 60px 0;
  overflow: hidden;
`;

const CalculatorContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;

  h1 {
    font-size: 36px;
    font-weight: 700;
    color: #37517e;
    margin-bottom: 30px;
    text-align: center;
  }

  .form-label {
    color: #37517e;
    font-weight: 500;
  }

  .form-control {
    border: 2px solid #e9ecef;
    border-radius: 8px;
    padding: 12px;
    &:focus {
      border-color: #106eea;
      box-shadow: none;
    }
  }

  .btn-calculate {
    background: #106eea;
    color: white;
    padding: 12px 30px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    width: 100%;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
      background: #37517e;
      transform: translateY(-2px);
    }
  }

  .result-section {
    margin-top: 30px;
    padding: 20px;
    border-radius: 8px;
    background: #f8f9fa;
    text-align: center;
    display: none;

    &.show {
      display: block;
    }

    h3 {
      color: #37517e;
      margin-bottom: 15px;
    }

    .bmi-value {
      font-size: 48px;
      font-weight: 700;
      color: #106eea;
      margin: 15px 0;
    }

    .bmi-category {
      font-size: 20px;
      color: #37517e;
      font-weight: 500;
    }
  }
`;

const Calculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) return;

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));


    let bmiCategory = '';
    if (bmiValue < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmiValue < 25) {
      bmiCategory = 'Normal Weight';
    } else if (bmiValue < 30) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obese';
    }
    setCategory(bmiCategory);
    setShowResult(true);
  };

  return (
    <CalculatorSection>
      <div className="container">
        <CalculatorContainer>
          <h1>
            <FaCalculator className="me-2" />
            BMI Calculator
          </h1>
          <form onSubmit={calculateBMI}>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">Weight (kg)</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight in kilograms"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="height" className="form-label">Height (cm)</label>
              <input
                type="number"
                className="form-control"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in centimeters"
                required
              />
            </div>
            <button type="submit" className="btn btn-calculate">
              Calculate BMI
            </button>
          </form>

          <div className={`result-section ${showResult ? 'show' : ''}`}>
            <h3>Your BMI Result</h3>
            <div className="bmi-value">{bmi}</div>
            <div className="bmi-category">{category}</div>
          </div>
        </CalculatorContainer>
      </div>
    </CalculatorSection>
  );
};

export default Calculator;
