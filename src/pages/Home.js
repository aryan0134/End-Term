import React from 'react'
import './Home.css';
import controller from '../Playstation/controller.png';
import arrow from '../Playstation/arrow.png';
import add from '../Playstation/add.png';

function Home() {
  return (
    <>
        <div className='row'>
            <div className='col-1'>
                <h2>PS4 V2</h2>
                <h2>Dualshock 4</h2>
                <h3>Wireless Controller for PlayStation 4</h3>
                <p>(Compatible/Generic)</p>
                <h4>$52.50</h4>
                <button type='button' className='buy'>Buy Now<img src={arrow} /></button>
            </div>
            <div className='col-2'>
                <img src={controller} className='controller' />
                <div className='color-box'></div>
                <div className='add-btn'>
                    <img src={add} />
                    <p><small>Add to Cart</small></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home