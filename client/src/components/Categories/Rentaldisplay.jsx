// RentalDisplay.js
import React from 'react';
import './rent.css';
import h1 from './h1.avif';
import { NavLink } from 'react-router-dom';
import cl from './close.png';

function RentalDisplay() {
  return (
    <div className='rentbox'>
      <h2 className='title'>Rented Items</h2>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
            <tr >
              <td className='im'><img src={h1} alt="" /></td>
              <td><h1 className='htitle'>Taj Mahal Palace</h1></td>
              <td><h2 className='hloc'>Mumbai ,India</h2></td>
              <td><p className='hpr'>₹15,000 per day</p></td>
            </tr>
         
        </tbody>
      </table>
      <NavLink to="/hotel"><img className='close' src={cl} alt="" /></NavLink>
      <button className='btn btn-warning btn'>Download Invoice</button>
    </div>
  );
}

export default RentalDisplay;
