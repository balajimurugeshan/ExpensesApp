import React from 'react'
import "./expenses.css"
import "./media.css"

export default function Head() {
    const head=[{title:"WELCOME TO  MONEYMANAGER"}]
  return (
    <div className="head-container">
        {head.map((wel)=>(
                <div className="head">
                <h1 className="head-text">{wel.title}</h1>
            </div>

        ))}
    

    </div>
  )
}
