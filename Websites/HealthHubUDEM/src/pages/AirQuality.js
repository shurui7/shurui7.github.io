import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaCloud, FaWind, FaLeaf } from 'react-icons/fa';


const AirQualitySection = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #f6f9fe;
  padding: 60px 0;
  overflow: hidden;
`;

const AirQualityContainer = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
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

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  th, td {
    padding: 12px;
    text-align: center;
    border: 1px solid #e9ecef;
  }

  th {
    background-color: #106eea;
    color: white;
    font-weight: 500;
  }

  tr:nth-child(even) {
    background-color: #f8f9fa;
  }

  tr:hover {
    background-color: #e9ecef;
  }

  .legend {
    margin-top: 30px;
    padding: 20px;
    border-radius: 8px;
    background: #f8f9fa;
    text-align: center;
  }

  .legend ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .legend li {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const getAirQualityColor = (value) => {
  if (value === 'N/A' || value === null || value === undefined) return '#ccc';
  if (value <= 50) return '#4caf50';
  if (value <= 100) return '#ffeb3b';
  if (value <= 150) return '#ff9800';
  return '#f44336';
};

const AirQuality = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirQualityData = async () => {
      try {
        const response = await fetch(
          'https://air-quality-api.open-meteo.com/v1/air-quality?latitude=45.5017&longitude=-73.5673&hourly=pm10,pm2_5,ozone,carbon_monoxide'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAirQualityData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  if (!data || !data.hourly) {
    return <p>No air quality data available.</p>;
  }

  const formatTime = (isoTime) => {
    const date = new Date(isoTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <AirQualitySection>
      <div className="container">
        <AirQualityContainer>
          <h1>
            <FaCloud className="me-2" />
            Montreal Air Quality
          </h1>

          <table>
            <thead>
              <tr>
                <th>
                  <FaWind className="me-2" />
                  Time
                </th>
                <th>
                  <FaLeaf className="me-2" />
                  PM10 (µg/m³)
                </th>
                <th>
                  <FaLeaf className="me-2" />
                  PM2.5 (µg/m³)
                </th>
                <th>
                  <FaLeaf className="me-2" />
                  Ozone (µg/m³)
                </th>
                <th>
                  <FaLeaf className="me-2" />
                  Carbon Monoxide (µg/m³)
                </th>
              </tr>
            </thead>
            <tbody>
              {data.hourly.time.map((time, index) => (
                <tr key={index}>
                  <td>{formatTime(time)}</td>
                  <td style={{ backgroundColor: getAirQualityColor(data.hourly.pm10?.[index] ?? 'N/A') }}>
                    {data.hourly.pm10?.[index] ?? 'N/A'}
                  </td>
                  <td style={{ backgroundColor: getAirQualityColor(data.hourly.pm2_5?.[index] ?? 'N/A') }}>
                    {data.hourly.pm2_5?.[index] ?? 'N/A'}
                  </td>
                  <td style={{ backgroundColor: getAirQualityColor(data.hourly.ozone?.[index] ?? 'N/A') }}>
                    {data.hourly.ozone?.[index] ?? 'N/A'}
                  </td>
                  <td style={{ backgroundColor: getAirQualityColor(data.hourly.carbon_monoxide?.[index] ?? 'N/A') }}>
                    {data.hourly.carbon_monoxide?.[index] ?? 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="legend">
            <p>Color Legend:</p>
            <ul>
              <li><span style={{ color: '#4caf50' }}>Green</span>: Good (0-50)</li>
              <li><span style={{ color: '#ffeb3b' }}>Yellow</span>: Moderate (51-100)</li>
              <li><span style={{ color: '#ff9800' }}>Orange</span>: Unhealthy for Sensitive Groups (101-150)</li>
              <li><span style={{ color: '#f44336' }}>Red</span>: Unhealthy (151+)</li>
              <li><span style={{ color: '#ccc' }}>Gray</span>: Data Not Available</li>
            </ul>
          </div>
        </AirQualityContainer>
      </div>
    </AirQualitySection>
  );
};

export default AirQuality;
