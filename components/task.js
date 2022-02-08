import React from 'react'
import './task.css'
import {Link} from 'react-router-dom'


const Task = () => {
    return(
        <div>
            <div className='HeaDer'>
                <div className='LoGo'>
               LOGO
                </div>
                <div className='NaV'>
                 <Link to='/' className='NaVs'> HOME</Link>
                 <Link to='/about' className='NaVs'>  ABOUT</Link>
               <Link to='/contact' className='NaVs'> CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Task