import React from 'react';
import image1 from './bg7.jpg';
import './hotel.css';
import { NavLink } from 'react-router-dom';

function Garden() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={image1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>
            </div>



        </div>
            
            
            </div>
     );
}

export default Garden;