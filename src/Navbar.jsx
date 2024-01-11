import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import Button from './Button';
import { ContextData } from './context/Context';

export default function Navbar() {
    const {setModal, setInputVal, specialVal} = useContext(ContextData)
    function special() {
        setModal(true)
        setInputVal(specialVal)
    }
    return (
        <nav>
            <div className='nav container'>
                <div className="logo"><img src='./img/Logo.svg' /></div>
                <ul className='pages'>
                    <li> < >Home</></li>
                    <li>< >Products</></li>
                    <li> < >About Us</></li>
                </ul>
                <ul>
                    <li>< ><CiShoppingCart /></></li>
                    <li>< ><GoHeart /></></li>
                    <li onClick={special}>< ><Button word={"add"} border={"none"} brr={5} paddin={"10px 15px"} width={100} bgcolor={"#46A358"} color={"white"} fontS={17} /></></li>
                </ul>
            </div>
        </nav>
    )
}