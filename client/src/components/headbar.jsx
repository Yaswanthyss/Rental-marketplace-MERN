import React from 'react';
import userlogo from './user.png';
import menulogo from './menu.png';
import complogo from './rentlogo.png';
// eslint-disable-next-line no-unused-vars
import image1 from './loginbg.png';
import search from './serach.png';
import hotel from './hotel.png';
import dozer from './bulldozer.png';
import bus from './bus.png';
import constr from './construction.png';
import bike from './scooter.png';
import par from './party.png';
import car from './car.png';
import seed from './seeding.png';
import spor from './sports.png';
import tool from './support.png';
import decor from './decor.png';
import cam from './camera.png';
import gad from './gadgets.png';
import ad from './journey.png';
import ot from './application.png';
import cart from './rentcart.png';

import './headbar.css';
import { NavLink } from 'react-router-dom';

function Topbar() {
    return ( 
        <div className='maincss'>
            <div>
                <img src={complogo} alt="" className='complogo1'/>
                <h1 className='logoname'>Forrent.com</h1>
            </div>
            {/* <div className='navbar-header'>
                    <NavLink className="navbar-brand" to="/home"></NavLink>
                    </div> */}
                    <NavLink to="/Rentaldisplay"><img className="cart" src={cart} alt="" /></NavLink>
            <div className='headbar1'>
            
            <div className="dropdown">
                 {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img src={menulogo} className='menu dropdown-toggle' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" alt="Dropdown Toggle Image"></img>
                
                <ul className="dropdown-menu" aria-labelledby="">
                    <li className='active'><NavLink className="dropdown-item" to="/hotel">Home</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/login'>Login</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/signup'>Sign Up</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/other'>Other Services</NavLink></li>
                </ul>
            </div>

                
                <img src={userlogo} alt="not visible" className='user'></img>
            </div>

            <div className='container'>
                
                <div className='headbar' >
                    <form action="" form-group>
                        <input type="text" className='form-control box' placeholder='Search for hotels , cars , bikes etc..' />
                    </form>
                    <img className="searchicon"src={search} alt="" />

                </div>
 <div className='catbar'>
     <ul className="list-group list-group-horizontal  overflow-auto w-75 horizontal-scroll">
    <li className="list-group-item"><NavLink to="/hotel"><img className="cat" src={hotel} alt="" /><p>Hotel</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/bike"><img className="cat"  src={bike} alt="" /><p>Bike</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/car"><img className="cat" src={car} alt="" /><p>Car</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/bus"><img className="cat" src={bus} alt="" /><p>Bus</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/party"><img className="cat" src={par} alt="" /><p>Party</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/decorative"><img className="cat" src={decor} alt="" /><p>Decoratives</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/cameras"><img className="cat" src={cam} alt="" /><p>Cameras</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/electronics"><img className="cat" src={gad} alt="" /><p>Electronics</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/adventuregears"><img className="cat" src={ad} alt="" /><p>Adventure Gears</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/gardening"><img className="cat" src={seed} alt="" /><p>Gardening</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/tools"><img className="cat" src={tool} alt="" /><p>Tools</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/construction"><img className="cat" src={constr} alt="" /><p>Construction</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/dozer"><img className="cat" src={dozer} alt="" /><p>Earth-Movers</p></NavLink></li>
    <li className="list-group-item"><NavLink to="/sport"><img className="cat" src={spor} alt="" /><p>Sports</p></NavLink></li>
    <li className="list-group-item"><NavLink><img className="cat" src={ot} alt="" /><p>Others</p></NavLink></li>
</ul>
</div> 
       



        
            
</div>
            </div>



    );
}

export default Topbar;