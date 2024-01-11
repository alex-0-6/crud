import React, { useState } from 'react'
export const ContextData = React.createContext();

export default function Contextfunc({ children }) {

    let specialVal = {
        name: "",
        category: "",
        price: "",
        img: "",
        discount: ""
    }

    const [datas, setDatas] = useState(JSON.parse(localStorage.getItem("datas")) || [])
    const [inputVal, setInputVal] = useState(specialVal)
    const [title, setTitle] = useState("add")
    const [modal, setModal] = useState(false)
    const [category, setCategory] = useState("")

    function delFun(id) {
        setDatas(datas.filter(i => i.id !== id))
        localStorage.setItem("datas", JSON.stringify(datas.filter(i => i.id !== id)))
    }


    function sformFunc(param) {
        if (!inputVal.id) {
            setDatas(
                [
                    ...datas,
                    {
                        ...inputVal,
                        id: param
                    }
                ]
            )
            localStorage.setItem("datas", JSON.stringify([
                ...datas,
                {
                    ...inputVal,
                    id: param
                }
            ]))
        } else {
            setDatas(datas.map(i => i.id === inputVal.id ? inputVal : i))
            localStorage.setItem("datas", JSON.stringify(datas.map(i => i.id === inputVal.id ? inputVal : i)))
        }
        setModal(false)
    }



    function getInputVal(param) {
        setInputVal(
            {
                ...inputVal,
                [param.target.name]: param.target.value
            }
        )

    }

    function editC(params) {
        setModal(true)
        setTitle("edit")
        setInputVal(params)
    }

    return (
        <ContextData.Provider value={{ datas, setDatas, delFun, getInputVal, inputVal, setInputVal, title, setTitle, sformFunc, modal, setModal, editC, category, setCategory, specialVal }}>
            {children}
        </ContextData.Provider>
    )
}
