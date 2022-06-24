import Reasct from 'react'
import img from '../../images/zdyn.png'
import './style.scss'

const Loading = () => {
    return(
        <div className="loading">
            <p>Пожалуйста, подождите...</p>
            <img src={img} alt="zdyn"/>
        </div>
    )
}

export default Loading