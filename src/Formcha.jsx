import React, { useContext } from 'react'
import { ContextData } from './context/Context'
import Slidebar from './Slider'
import { v4 as uuidv4 } from 'uuid';




export default function Formcha() {
    let { getInputVal, sformFunc, inputVal, title, setModal } = useContext(ContextData)

    function sending() {
        sformFunc(uuidv4())
    }
    return (
        <div className="register">
            <form onSubmit={() => sending()}>
                <br /><br />
                <h1><center>{title}</center></h1>
                <br /><br />
                <label>
                    <div>
                        <input onInput={(e) => getInputVal(e)} name="name" type="text" placeholder='name' value={inputVal?.name} />
                    </div>
                </label>
                <label>
                    <div>
                        <input onInput={(e) => getInputVal(e)} name="price" type="number" placeholder='price' value={inputVal?.price} />
                    </div>
                </label>
                <label>
                    <div>
                        <input onInput={(e) => getInputVal(e)} name="img" type="text" placeholder='img' value={inputVal?.img} />
                    </div>
                </label>
                <label>
                    <div>
                        <input onInput={(e) => getInputVal(e)} name="discount" type="number" placeholder='discount' value={inputVal?.discount} />
                    </div>
                </label>
                <label>
                    <select name='category' onInput={(e) => getInputVal(e)}>
                        <option defaultChecked>category</option>
                        <option value="big">big</option>
                        <option value="small">small</option>
                        <option value="house">house</option>
                    </select>
                </label>
                <button>Register</button>
                <div onClick={() => setModal(false)} className='cres'>❎</div>
            </form>
        </div>
    )
}
