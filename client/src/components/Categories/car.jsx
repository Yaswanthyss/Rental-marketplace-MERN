import React from 'react';
import './hotel.css';
import { NavLink} from 'react-router-dom';
import h1 from './Img3.avif';
import h2 from './Img9.jpg';
import h3 from './Img11.avif';
import h4 from './Car 1.jpg';
import h5 from './car 5.avif';
import h6 from './Car 4.jpg';
import h7 from './Car 2.jpg';
import h8 from './Car 3.jpg';

function Car() {
    return ( 
        <div className='topgap'>
             <div className='container'>
                    <div className='alignment'>
                        
                        {/* <div className="card card1" style={{ width: '330px' }}>
                            <img src={h1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h1 className='rating'>☆</h1>
                                    <h5 class="card-title">Xiomi's XUV7</h5>
                                    <h5 className='card-title2'>Mumbai, India</h5><br /><br />
                                    <p class="card-text">  </p>
                                       
                                </div>
                         </div> */}

                         <NavLink to="/details/h1" className="card card1" style={{ width: '330px' }}>
                        
                              <img src={h1} className="card-img-top" alt="..."></img>
                                <div class="card-body">
                                <h1 className='rating'>☆</h1>
                                    <h5 class="card-title">Xiomi's XUV7</h5>
                                    <h5 className='card-title2'>Chennai, Tamil Nadu</h5><br /><br />
                                    <p class="card-text"> ₹15,000 per day</p>
                                       
                                </div>
                         </NavLink>
                         



            <NavLink to="/details/h2">
                <div className="card card2" style={{ width: '330px' }}>
                    <img src={h2} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">BMW 3 Series</h5>
                    <h5 className='card-title2'>Agra, Uttar Pradesh</h5><br /><br />
                    <p class="card-text"> ₹10,000 per day </p>
                       
                </div>
                </div>
                </NavLink>

                <div className="card card3" style={{ width: '330px' }}>
                    <img src={h3} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Chevrolet Silverado</h5>
                    <h5 className='card-title2'>Jaipur, Rajasthan</h5><br /><br />
                    <p class="card-text"> ₹12,000 per day</p>
                       
                </div>
                </div>

                <div className="card card4" style={{ width: '330px' }}>
                    <img src={h4} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Porsche </h5>
                    <h5 className='card-title2'>Madurai, Tamil Nadu</h5><br /><br />
                    <p class="card-text"> ₹13,000 per day</p>
                       
                </div>
                </div>
            </div>


            <div className='alignment'>
                <div className="card card5" style={{ width: '330px' }}>
                    <img src={h5} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Goalf R333</h5>
                    <h5 className='card-title2'>Sanfrancisco,USA</h5><br /><br />
                    <p class="card-text"> $500 per day</p>
                       
                </div>
                </div>

                <div className="card card6" style={{ width: '330px' }}>
                    <img src={h6} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Honda Accord</h5>
                    <h5 className='card-title2'>amsterdam,Netherlands</h5><br /><br />
                    <p class="card-text"> €200 Per day</p>
                       
                </div>
                </div>

                <div className="card card7" style={{ width: '330px' }}>
                    <img src={h7} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Lamborghini</h5>
                    <h5 className='card-title2'>Tokyo ,Japan</h5><br /><br />
                    <p class="card-text"> Yen 200 Per day</p>
                       
                </div>
                </div>

                <div className="card card8" style={{ width: '330px' }}>
                    <img src={h8} className="card-img-top" alt="..."></img>
                <div class="card-body">
                <h1 className='rating'>☆</h1>
                    <h5 class="card-title">Tesla Model Y</h5>
                    <h5 className='card-title2'>Barcelona ,Spain</h5><br /><br />
                    <p class="card-text"> €300 Per day</p>
                       
                </div>
                </div>


            </div>



        </div>
            
            
            </div>
     );
}

export default Car;