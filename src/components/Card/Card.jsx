import React from 'react'
import './style.scss'
import img from '../../images/js.jpg'



const Card = ({setShow, item, setBookItem}) => {
    return (
        <div className="card" onClick={() => {setShow("true"); setBookItem(item)}}>
            <img src={item.volumeInfo?.imageLinks?.smallThumbnail}/>
            <div className="info">
                <p>{item.volumeInfo?.categories}</p>
                <h2>{item.volumeInfo?.title}</h2>
                <h3>{item.volumeInfo?.authors}</h3>
            </div>
        </div>
    )
}

export default Card;