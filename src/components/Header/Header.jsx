import React from 'react'
import Select from 'react-select'
import img from '../../images/search.png'
import './style.scss'

const Header = ({setValue, getDataBooks, setOrder, setCategories}) => {

    const categories = [
        { value: 'all', label: 'All' },
        { value: 'art', label: 'Art' },
        { value: 'biography', label: 'Biography' },
        { value: 'computers', label: 'Computers' },
        { value: 'history', label: 'History' },
        { value: 'medical', label: 'Medical' },
        { value: 'poetry', label: 'Poetry' }
    ];

    const sortingBy = [
        { value: 'relevance', label: 'Relevance' },
        { value: 'newest', label: 'Newest' }
    ];
    const changeValue = (e) => {
        let value = e.target.value;
        setValue(value)
       // console.log(value)
    }
    const keyPress = (e) => {
        if(e.key === "Enter"){
           // getDataBooks();
           // console.log(123)
        }
    }

    const buttonSearch = () => {
        //getDataBooks();
       // console.log(123)
    }

    const handleChangeSort = (e) => {
        setOrder(e.target.value)
       // console.log(e.target.value)
    }

    const handleChangeCategories = (e) => {
        setCategories(e.target.value)
       // console.log(e.target.value)
    }

    return (
        <div className="header">
           <div className="header__container">
                <h1>Search for books</h1>
                <div className="header__container__search">
                    <input type="text" placeholder="Search books..." onChange={(e) => changeValue(e)}  onKeyPress={(e) => keyPress(e)}/>
                    <button><img src={img} alt="search" onClick={() => buttonSearch()}/></button>
                </div>
                <div className="header__container__sort">
                    <section className="filtration">
                        <p>Categories</p>
                        <select className="selecte" onChange={(e) => handleChangeCategories(e)}>                           
                            {
                                categories.map((item, index) => (
                                    <option value={item.value} key={index}>{item.label}</option>
                                ))
                            }
                        </select>
                    </section>
                    <section className="filtration">
                        <p>Sorting By</p>
                        <select className="selecte" onChange={(e) => handleChangeSort(e)}>                           
                            {
                                sortingBy.map((item, index) => (
                                    <option value={item.value} key={index}>{item.label}</option>
                                ))
                            }
                        </select>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Header;