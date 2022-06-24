import React from 'react'
import img from '../../images/close.png'
import './style.scss'

const Modal = ({setShow, bookItem}) => {
    return (
        <div className="overlay">
            <img src={img} alt="close" className="close" onClick={() => setShow("false")}/>
            <div className="overlay-inner">
                <div className="cover">
                    <img src={bookItem.volumeInfo?.imageLinks?.thumbnail} alt=""/>
                </div>
                
                <div className="inner-box">
                    <p className="navigation">{bookItem?.volumeInfo?.categories}</p>
                    <h3>{bookItem.volumeInfo?.title}</h3>
                    <p className="author">{bookItem.volumeInfo?.title}</p>
                    <div className="description">
                        <p>{bookItem?.volumeInfo?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;