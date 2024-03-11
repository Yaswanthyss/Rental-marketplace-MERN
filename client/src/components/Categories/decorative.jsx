import React from 'react';
import image1 from './bg7.jpg';
import './hotel.css';
import { NavLink } from 'react-router-dom';
import h1 from './decor home1.webp';
import h2 from './decor home2.webp';
import h3 from './decor home6.jpg';
import h4 from './decor home7.jpg';
import h5 from './decor home8.jpg';
import h6 from './decor home9.webp';
import h7 from './home decor 11.jpg';
import h8 from './home decor 12.jpg';

function Decorative() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={h1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                                    <p class="card-text"> </p>
                                     
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={h2} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={h3} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={h4} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={h5} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={h6} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={h7} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={h8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text"> </p>
                     
                </div>
                </div>
            </div>



        </div>
             
            </div>
     );
}

export default Decorative;