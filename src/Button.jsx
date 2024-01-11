import React from 'react'

export default function Button({ word, paddin, margin, color, bgcolor, heigh, width, brr, fontS, border }) {
    return (
        <button style={{ border: `${border}`, fontWeight: "bold", padding: `${paddin}`,fontSize:`${fontS}px`, borderRadius: `${brr}px`, margin: `${margin}`, color: `${color}`, backgroundColor: `${bgcolor}`, height: `${heigh}px`, width: `${width}px` }}>{word}</button>
    )
}
