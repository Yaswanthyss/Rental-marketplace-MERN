import React from 'react';
import image1 from './bg7.jpg';
import './hotel.css';
import { NavLink } from 'react-router-dom';
import p1 from './Party 1.webp';
import p2 from './Party 2.jpg';
import p3 from './Party 3.jpg';
import p4 from './Party 4.jpg';
import p5 from './Party 5.jpg';
import p6 from './Party 6.jpg';
import p7 from './Party 7.jpg';
import p8 from './Party 8.jpg';

function Party() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={p1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                                    <p class="card-text">  </p>
                                      
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={p2} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={p3} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={p4} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={p5} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={p6} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={p7} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={p8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">  </p>
                      
                </div>
                </div>
            </div>



        </div>
            
            
            </div>
     );
}

export default Party;