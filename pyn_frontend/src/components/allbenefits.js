import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllBenefits() {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/employee-benefits/', {
      headers: {
        'Authorization': `Token ${token}`
      }
    })
    .then(response => {
      setBenefits(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the benefits!', error);
    });
  }, []);

  return (
    <div>
      <h1>All Employee Benefits</h1>
      <ul>
        {benefits.map(benefit => (
          <li key={benefit.id}>{benefit.employee.username} - {benefit.benefit.name}: {benefit.benefit.description} - ${benefit.benefit.cost}</li>
        ))}
      </ul>
    </div>
  );
}

export default AllBenefits;
