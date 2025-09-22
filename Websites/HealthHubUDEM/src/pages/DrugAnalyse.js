import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaPills, FaSearch, FaExclamationTriangle } from 'react-icons/fa';


const DrugAnalyseSection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f6f9fe;
  padding: 60px 0;
  overflow: hidden;
`;

const DrugAnalyseContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
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

  .btn-analyse {
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
    text-align: left;
    display: none;

    &.show {
      display: block;
    }

    h3 {
      color: #37517e;
      margin-bottom: 15px;
    }

    .drug-info {
      margin-bottom: 20px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);

      h4 {
        color: #106eea;
        margin-bottom: 10px;
      }

      p {
        color: #37517e;
        margin-bottom: 8px;
      }
    }
  }

  .error-section {
    background: #fff3f3;
    border: 1px solid #ffcccc;
    color: #cc0000;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
  }
`;

const DisclaimerSection = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 20px;
  background: #fff3e0;
  border-radius: 8px;
  border: 1px solid #ffe0b2;
  color: #e65100;
  text-align: center;

  p {
    margin-bottom: 0;
    font-size: 14px;
    line-height: 1.5;
  }

  strong {
    font-weight: 600;
  }
`;

function DrugAnalyse() {
  const [drugName, setDrugName] = useState('');
  const [drugInfo, setDrugInfo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchDrugInfo = async (e) => {
    e.preventDefault();
    if (!drugName) return;

    setLoading(true);
    setError('');
    setDrugInfo(null);

    try {
      const response = await fetch(
        `https://api.fda.gov/drug/label.json?search=openfda.brand_name:${drugName}&limit=1`
      );
      
      if (!response.ok) throw new Error('Failed to fetch drug information');
      
      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        setDrugInfo(data.results[0]);
      } else {
        setError(`"${drugName}" not found in our database or it's unavailable in our database. Please try another medication.`);
      }
    } catch (err) {
      setError('An error occurred while fetching drug information or it\'s unavailable in our database. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DrugAnalyseSection>
      <div className="container">
        <DrugAnalyseContainer>
          <h1>
            <FaPills className="me-2" />
            Drug Information Analyser
          </h1>

          <DisclaimerSection>
            <p>
              <strong>Important:</strong> The information provided here is for educational purposes only and should not be used as professional medical advice, diagnosis, or treatment. Always consult with your doctor or a qualified healthcare provider before making any decisions about your health or medication.
            </p>
          </DisclaimerSection>

          <form onSubmit={fetchDrugInfo}>
            <div className="mb-3">
              <label htmlFor="drug" className="form-label">
                <FaSearch className="me-2" />
                Medication Name
              </label>
              <input
                type="text"
                className="form-control"
                id="drug"
                value={drugName}
                onChange={(e) => setDrugName(e.target.value)}
                placeholder="Enter medication name (e.g., Ibuprofen)"
                required
              />
            </div>
            <button type="submit" className="btn btn-analyse" disabled={loading}>
              {loading ? 'Searching...' : 'Analyse Medication'}
            </button>
          </form>

          {error && (
            <div className="error-section">
              <FaExclamationTriangle className="me-2" />
              {error}
            </div>
          )}

          {drugInfo && (
            <div className="result-section show">
              <h3>Medication Information</h3>
              <div className="drug-info">
                <h4>Brand Name: {drugInfo.openfda.brand_name}</h4>
                <p><strong>Generic Name:</strong> {drugInfo.openfda.generic_name}</p>
                <p><strong>Purpose:</strong> {drugInfo.purpose}</p>
                <p><strong>Active Ingredient:</strong> {drugInfo.active_ingredient}</p>
                <p><strong>Indications:</strong> {drugInfo.indications_and_usage}</p>
                <p><strong>Warnings:</strong> {drugInfo.warnings}</p>
                <p><strong>Dosage:</strong> {drugInfo.dosage_and_administration}</p>
              </div>
            </div>
          )}
        </DrugAnalyseContainer>
      </div>
    </DrugAnalyseSection>
  );
}

export default DrugAnalyse;