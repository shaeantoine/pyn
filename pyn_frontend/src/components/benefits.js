import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Benefits() {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/benefits/')
      .then(response => {
        setBenefits(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the benefits!', error);
      });
  }, []);

  return (
    <div>
      <h1>Benefits</h1>
      <ul>
        {benefits.map(benefit => (
          <li key={benefit.id}>{benefit.name}: {benefit.description} - ${benefit.cost}</li>
        ))}
      </ul>
    </div>
  );
}

export default Benefits;
