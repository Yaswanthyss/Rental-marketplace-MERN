// Rental.js
import React from 'react';

function Rental({ rentedItems }) {
  return (
    <div>
      <h2>Rented Items</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Location</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {rentedItems.map((item, index) => (
            <tr key={index}>
              <td><img src={item.image} alt={item.title} /></td>
              <td>{item.title}</td>
              <td>{item.location}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rental;
