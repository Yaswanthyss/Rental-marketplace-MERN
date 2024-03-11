import React,{useState} from 'react';
import userlogo from './user.png';
import menulogo from './menu.png';
import complogo from './rentlogo.png';
import image1 from './h6.jpg';
import h1 from './h1.avif';
import h2 from './h2.webp';
import h3 from './h3.jpg';
import h4 from './h4.jpg';
import h5 from './h5.jpg';
import h6 from './h6.jpg';
import h7 from './h7.jpg';
import h8 from './h9.jpg';
import Popup from './Popup';
import Rental from './rental';
import { Navigate } from 'react-router-dom';
import RentalDisplay from './Rentaldisplay';
import { Route, Routes } from "react-router-dom";
import RentedItemsTable from './RentedItemsTable';



import './hotel.css';
import { NavLink } from 'react-router-dom';

function Hotel() {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const [rentedItems, setRentedItems] = useState([]);

    const handleCardClick = (hotelData) => {
        setSelectedHotel(hotelData);
    };
    // const handleRent = (hotel) => {
    //     setRentedItems([...rentedItems, hotel]);
    //   };

    

  const handleRent = (item) => {
    setRentedItems([...rentedItems, item]);
  };

    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h1, title: "Taj Mahal Palace", location: "Mumbai, India", cost: "₹15,000 per day" })}>
                            <img src={h1} className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                <h1 className='rating'>☆</h1>
                                    <h5 className="card-title">Taj Mahal Palace <br /></h5>
                                    <h5 className='card-title2'>Mumbai, India</h5>
                                    <br /><br /><p className="card-text">₹15,000 per day</p>
                                </div>
                                {/* <RentalDisplay rentedItems={rentedItems} /> */}
                                
                         </div>
                         
                         

                <div className="card card2" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h2, title: "The Venetian Resort", location: "Las Vegas, Nevada, USA", cost: "$250 per day" })}
>
                    <img src={h2} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 className="card-title">The Venetian Resort</h5>
                    <h5 className='card-title2'>Las Vegas, Nevada, USA</h5><br /><br />
                    <p className="card-text">$250 per day</p>
                    
                </div>
        
         
                </div>

                <div className="card card3" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h3, title: "ITC Grand Chola", location: "Chennai, India", cost: "₹18,000 per day" })}
>
                    <img src={h3} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h1 className='rating'>☆</h1>
                    <h5 className="card-title">ITC Grand Chola </h5>
                    <h5 className='card-title2'>Chennai, India </h5><br /><br />
                    <p className="card-text">₹18,000 per day</p>
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h4, title: "Atlantis The Palm", location: "Dubai, UAE", cost: "AED 2,500 per day" })}
>
                    <img src={h4} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 className="card-title">Atlantis The Palm </h5>
                    <h5 className='card-title2'>Dubai, UAE</h5><br /><br />
                    <p className="card-text">AED 2,500 per day</p>
                
                </div>
                </div>
                {/* {selectedHotel && (
        <Popup hotel={selectedHotel} onClose={() => setSelectedHotel(null)} onRent={handleRent} />
      )}
                 */}
            


            {/* <div className='alignment'> */}
                <div className="card card5" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h5, title: "W Marriott Marquis Hotel", location: "Dubai, UAE", cost: "AED 3,500 per day" })}
>
                    <img src={h5} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 className="card-title">W Marriott Marquis Hotel</h5>
                    <h5 className='card-title2'>Dubai, UAE</h5><br /><br />
                    <p className="card-text">AED 3,500 per day</p>
                    
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h6, title: "The Ritz-Carlton", location: "Tokyo, Japan", cost: "¥55,000 per day" })}
>
                    <img src={h6} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 className="card-title">The Ritz-Carlton</h5>
                    <h5 className='card-title2'> Tokyo, Japan</h5><br /><br />
                    <p className="card-text">¥55,000 per day</p>
                    
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h7, title: "The Peninsula Tokyo", location: "Tokyo, Japan", cost: "¥50,000 per day" })}
>
                    <img src={h8} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 className="card-title">The Peninsula Tokyo</h5>
                    <h5 className='card-title2'>Tokyo, Japan</h5><br /><br />
                    <p className="card-text">¥50,000 per day </p>
                    
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }} onClick={() => handleCardClick({ image: h8, title: "The Plaza Hotel", location: "New York City, USA", cost: "$350 per day" })}
>
                    <img src={h7} className="card-img-top" alt="..."></img>
                <div className="card-body">
                <h4 className='rating'>4☆</h4>
                    <h5 className="card-title">The Plaza Hotel </h5>
                    <h5 className='card-title2'>New York City, USA</h5><br /><br />
                    <p className="card-text">$350 per day</p>
                    
                </div>
                </div>
                {selectedHotel && (
        <Popup hotel={selectedHotel} onClose={() => setSelectedHotel(null)} onRent={handleRent} />
      )}
            {/* </div> */}
            </div>



        </div>
        <div>
            <br />
            <br />
            <br />
            <p></p>
        </div>
            
            
            </div>



    );
}

export default Hotel;