import React from 'react'
import Card from '../Card/Card'
import ReactPaginate from 'react-paginate'; 
import './style.scss'

const Cards = ({setShow, data, setBookItem, pageCount, handlePageClick}) => {
    

    return(
        <div className="container">
            <div className="container__card">
                {
                    data.map((item, index) => (
                        <Card setShow={setShow} key={index} item={item} setBookItem={setBookItem}/>
                    ))
                }
            </div>
                

            { 
                data.length > 0 &&
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} 
                />
           }
    
            
           
        </div>
    )
}

export default Cards