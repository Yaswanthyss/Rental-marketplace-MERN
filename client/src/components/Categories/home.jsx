import React from 'react';

import userlogo from './user.png';
import menulogo from './menu.png';
import complogo from './rentlogo.png';
import image1 from './loginbg.png';
import search from './serach.png';
import hotel from './hotel.png';
import dozer from './bulldozer.png';
import bus from './bus.png';
import constr from './construction.png';

import './headbar.css';
import { NavLink } from 'react-router-dom';

function Home() {
    return ( 
        <div className='topgap'>
             <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }} >
                <div className="card card1" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card2" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card3"  style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5">
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card6">
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card7">
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>

                <div className="card card8">
                    <img src={image1} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="/cart"className="btn btn-primary">Rent Now</NavLink>
                </div>
                </div>
            </div>
        </div>
     );
}

export default Home;