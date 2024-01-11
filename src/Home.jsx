import React, { useContext } from 'react'
import { ContextData } from './context/Context'
import Slidebar from './Slider'
import Formcha from './Formcha'
import Button from './Button'


export default function Home() {

  const { datas, modal, delFun, editC, category, setCategory } = useContext(ContextData)

  return (
    <div className="container">
      {
        modal ? <Formcha /> : ""
      }
      <div className="df">
        <div className='saralash'>
          <h3>Category  </h3>
          <div onClick={()=> setCategory()}><span>  House Plants</span> <span></span></div>
          <div><span>Small Plants</span> <span></span></div>
          <div><span>Big Plants</span> <span></span></div>
          <span></span>
        </div>
        <div className="cardsBlock">
          {
            datas
            
            .map(item => (
              <div className='card' key={item?.id}>
                <figure>
                  <img src={item.img} alt="hoda" />
                </figure>
                <p>{item.name}</p>
                <span>{item.price}</span>
                <br />
                <br />
                <span onClick={() => delFun(item.id)}> <Button heigh={40} word={"DELETE"} margin={"0 10px 0 0"} width={80} paddin={"10px 15px"} border={"none"} bgcolor={"red"} fontS={15} color={"white"} /></span>
                <span onClick={()=> editC(item)}><Button heigh={40} word={"edit"} width={80} paddin={"5px 7px"} border={"none"} bgcolor={"blue"} fontS={15} color={"white"} /></span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
