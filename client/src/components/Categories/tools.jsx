import React from 'react';
// eslint-disable-next-line no-unused-vars
import image1 from './bg7.jpg';
import './hotel.css';
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
import t1 from './t1.webp';
import t2 from './t2.jpeg';
import t3 from './t3.jpeg';
import t4 from './t4.jpg';
import t5 from './t5.jpg';
import t6 from './t6.webp';
import t7 from './t7.jpeg';
import t8 from './t8.jpg';

function Tools() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={t1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Cutter</h5>
                                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                                    <p class="card-text">₹500 per day</p>
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={t6} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Tool box</h5>
                    <h5 className='card-title2'>New York City, USA:</h5><br /><br />
                    <p class="card-text">$10 per day</p>
                     
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={t7} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Spanners </h5>
                    <h5 className='card-title2'>Paris, France</h5><br /><br />
                    <p class="card-text">€40 per day</p>
                     
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={t8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Screw Drivers</h5>
                    <h5 className='card-title2'>Tokyo, Japan</h5><br /><br />
                    <p class="card-text"> Yen 15 per day</p>
                     
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={t5} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Car Jack</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={t2} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Tile cutter</h5>
                    <h5 className='card-title2'>Mahararastra, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={t3} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Screwer</h5>
                    <h5 className='card-title2'>Madurai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={t4} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Driller</h5>
                    <h5 className='card-title2'>Bangalore, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>
            </div>



        </div>
            
            
            </div>
     );
}

export default Tools;