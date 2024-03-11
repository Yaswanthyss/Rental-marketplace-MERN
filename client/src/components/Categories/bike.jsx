import React from 'react';
import image1 from './bg7.jpg';
import './hotel.css';
import { NavLink } from 'react-router-dom';
import bk1 from './b1.jpg';
import bk2 from './b2.jpg';
import bk3 from './b3.jpg';
import bk4 from './b4.jpg';
import bk5 from './b5.jpg';
import bk6 from './bike6.webp';
import bk7 from './bike7.webp';
import bk8 from './bike8.jpeg';

function Bike() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={bk1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h1 className='rating'>☆</h1>
                                    <h5 class="card-title">KTM 250cc</h5>
                                    <h5 className='card-title2'>Bangkok, Thailand</h5><br /><br />
                                    <p class="card-text"> ฿300 Per day </p>
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={bk2} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Himalayan</h5>
                    <h5 className='card-title2'>Paris, France</h5><br /><br />
                    <p class="card-text">€30 Per day </p>
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={bk3} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Yamaha R15</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> ₹1500 per day</p>
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={bk4} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Honda SP 125</h5>
                    <h5 className='card-title2'>New York City, USA</h5><br /><br />
                    <p class="card-text">$20 Per day </p>
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={bk5} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Bajaj Pulsar RS200</h5>
                    <h5 className='card-title2'>Chennai, India</h5><br /><br />
                    <p class="card-text">₹1,000 per day </p>
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={bk6} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">OLA S1 Pro</h5>
                    <h5 className='card-title2'>Tokyo, Japan</h5><br /><br />
                    <p class="card-text"> Yen 20 Per day</p>
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={bk7} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Royal Enfield Hunter 350</h5>
                    <h5 className='card-title2'>Bangalore, India</h5><br /><br />
                    <p class="card-text"> ₹2,000 per day</p>
                    
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={bk8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Suzuki Access 125</h5>
                    <h5 className='card-title2'>Madurai, India</h5><br /><br />
                    <p class="card-text">₹900 per day </p>
                </div>
                </div>
            </div>
        </div>
            </div>
     );
}

export default Bike;