import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Slidebar() {
  return (
    <div className='slidebar'>
        <h1>Categories</h1>
        <div className='slidebarborder'>
            <ul>
                <li><NavLink>HousePlants <span>(64)</span></NavLink></li> 
                <li><NavLink>Seeds  <span>(24)</span></NavLink></li>
                <li><NavLink>Big Plants <span>(38)</span></NavLink></li>
            </ul>
        </div> <br /><br /> 
        <button className='slidebatbtn'>Products</button>
    </div>
  )
}
