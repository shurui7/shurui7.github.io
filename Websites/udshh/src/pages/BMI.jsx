import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaCalculator, FaWeight, FaRuler } from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: #2c974b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #4a4a4a;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #2c974b;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #2c974b;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: #2c974b;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #216e39;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Result = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 4px;
  background-color: ${props => {
    switch (props.category) {
      case 'Underweight':
        return '#fff3cd';
      case 'Normal':
        return '#d4edda';
      case 'Overweight':
        return '#fff3cd';
      case 'Obese':
        return '#f8d7da';
      default:
        return '#f8f9fa';
    }
  }};
  text-align: center;

  h2 {
    color: #2c974b;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
    color: #4a4a4a;
  }
`;

const BMIInfo = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;

  h3 {
    color: #2c974b;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.5rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 4px;
    background-color: white;
  }
`;

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const roundedBMI = Math.round(bmi * 10) / 10;

    let category;
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    setBmiResult({ value: roundedBMI, category });
  };

  const isValidInput = weight > 0 && height > 0;

  return (
    <PageContainer>
      <Title>
        BMI Calculator
      </Title>

      <Card>
        <Form onSubmit={calculateBMI}>
          <InputGroup>
            <Label>
              <FaWeight /> Weight (kg)
            </Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight"
              step="0.1"
              min="0"
              required
            />
          </InputGroup>

          <InputGroup>
            <Label>
              <FaRuler /> Height (cm)
            </Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height"
              step="0.1"
              min="0"
              required
            />
          </InputGroup>

          <Button type="submit" disabled={!isValidInput}>
            Calculate BMI
          </Button>
        </Form>

        {bmiResult && (
          <Result category={bmiResult.category}>
            <h2>Your BMI Result</h2>
            <p>Your BMI is: <strong>{bmiResult.value}</strong></p>
            <p>Category: <strong>{bmiResult.category}</strong></p>
          </Result>
        )}

        <BMIInfo>
          <h3>BMI Categories</h3>
          <ul>
            <li>
              <span>Underweight</span>
              <span>&lt; 18.5</span>
            </li>
            <li>
              <span>Normal weight</span>
              <span>18.5 - 24.9</span>
            </li>
            <li>
              <span>Overweight</span>
              <span>25 - 29.9</span>
            </li>
            <li>
              <span>Obese</span>
              <span>≥ 30</span>
            </li>
          </ul>
        </BMIInfo>
      </Card>
    </PageContainer>
  );
};

export default BMI; 