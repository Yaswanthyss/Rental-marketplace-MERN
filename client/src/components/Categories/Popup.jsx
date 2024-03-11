// import React, { useEffect, useState } from 'react';
// import './popup.css';

// function Popup({ hotel, onClose }) {
//   const [isOpen, setIsOpen] = useState(true);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       const popup = document.querySelector('.popup-inner');
//       if (popup && !popup.contains(event.target)) {
//         onClose();
//       }
//     };

//     window.addEventListener('click', handleClickOutside);

//     return () => {
//       window.removeEventListener('click', handleClickOutside);
//     };
//   }, [onClose]);

//   const handleClose = () => {
//     setIsOpen(false);
//     onClose();
//   };

//   return (
//     <div className={`popup ${isOpen ? 'open' : ''}`}>
//       <div className="popup-inner">
//         <img src={hotel.image} alt={hotel.title} />
//         <h2>{hotel.title}</h2>
//         <p>{hotel.location}</p>
//         <p>{hotel.cost}</p>
//         <button className="close" onClick={handleClose}>X</button>
//         <button>Rent Now</button>
//       </div>
//     </div>
//   );
// }

// export default Popup;

// Popup.js
import React, { useEffect, useState } from 'react';
import './popup.css';
import { NavLink } from 'react-router-dom';

function Popup({ hotel, onClose, onRent }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.querySelector('.popup-inner');
      if (popup && !popup.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  const handleRent = () => {
    onRent(hotel); 
    <NavLink to="/Rentingdisplay"></NavLink>// Pass the hotel data to the onRent function
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-inner">
        <img src={hotel.image} alt={hotel.title} />
        <h2>{hotel.title}</h2>
        <p>{hotel.location}</p>
        <p>{hotel.cost}</p>
        <button className="close" onClick={handleClose}>X</button>
        <button onClick={handleRent}>Rent Now</button>
      </div>
    </div>
  );
}

export default Popup;
