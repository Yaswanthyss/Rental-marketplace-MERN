import React from 'react';
import image1 from './bg7.jpg';
import './headbar.css';
import { NavLink } from 'react-router-dom';

function Decorative() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        <div className="card card1" style={{ width: '330px' }}>
                            <img src={image1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                                </div>
                         </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
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
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>
            </div>



        </div>
            
            
            </div>
     );
}

export default Decorative;