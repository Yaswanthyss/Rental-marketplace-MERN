import React from 'react';
// eslint-disable-next-line no-unused-vars
import image1 from './bg7.jpg';
import './hotel.css';
// eslint-disable-next-line no-unused-vars
import { NavLink } from 'react-router-dom';
import c1 from './c1.webp';
import c2 from './c2.jpg';
import c3 from './c3.jpg';
import c4 from './c4.jpg';
// eslint-disable-next-line no-unused-vars
import c5 from './c5.jpg';
import c6 from './c11.webp';
import c7 from './c12.jpg';
import c8 from './c13.avif';


function Camera() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={c1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">SONY Alpha 1 50.1MP</h5>
                                    <h5 className='card-title2'>Chennai, India</h5><br /><br />
                                    <p class="card-text"> ₹2,000 per day</p>
                                       
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={c2} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Nikon D7500 DSLR Camera </h5>
                    <h5 className='card-title2'>Maharastra, India</h5><br /><br />
                    <p class="card-text">₹4,000 per day</p>
                       
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={c3} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">GoPro HERO11</h5>
                    <h5 className='card-title2'>Los Angels ,USA</h5><br /><br />
                    <p class="card-text">$150 per day </p>
                       
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={c4} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Fujifilm instax Mini 12</h5>
                    <h5 className='card-title2'>Dubai</h5><br /><br />
                    <p class="card-text"> 500 D per day</p>
                       
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={c8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">GoPro HERO12</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">   </p>
                       
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={c6} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Umbrella lights </h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">   </p>
                       
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={c7} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Laser Camera</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">   </p>
                       
                </div>
                </div>

                <div className="card card8">
                    <img src={c8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Bosch Lens</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">   </p>
                       
                </div>
                </div>
            </div>



        </div>
            
            
            </div>
     );
}

export default Camera;