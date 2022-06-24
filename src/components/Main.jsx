import React, {useState, useEffect} from 'react'
import Header from './Header/Header';
import Cards from './Cards/Cards'
import Modal from './Modal/Modal'
import Loading from './Loading/Loading';
import Error from './Error/Error';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getBooksAction, getBooksPagAction } from '../reducer/booksReduce';
import {fetchCustomers} from '../thunk/index'
import './style.scss'

const Main = () => {
    const [value, setValue] = useState('');
    //const [data, setDate] = useState([]);  
    const [show, setShow] = useState("false")
    const [loading, setLoading] = useState(false)
    const [bookItem, setBookItem] = useState();
                                                    //------ paginate
    //const [dataN, setDataN] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [postsPerPage] = useState(8);
    const [offset, setOffset] = useState(1);

                                                     //------  sort
    const [order, setOrder] = useState('relevance')
    const [categories, setCategories] = useState('all')

    const dispatch = useDispatch();
    const books = useSelector(state => state.books.books)
    const booksPag = useSelector(state => state.books.booksPag)

    const getDataBooks = () => {
        setLoading(true)
        // axios.get('https://www.googleapis.com/books/v1/volumes?q='+value+'filter='+categories+'&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk&maxResults=30')
        // .then(response => dispatch(getBooksAction(response.data.items)))
        // .catch(err => <Error err={err}/>);

        dispatch(fetchCustomers())    //thunk

        const slice = books.slice(offset - 1 , offset - 1 + postsPerPage)   //pagination
        dispatch(getBooksPagAction(slice))
        setPageCount(Math.round(books.length / postsPerPage))

        setLoading(false);
    }

    console.log(books)

    const handlePageClick = (event) => {               //for pagination
        const selectedPage = event.selected;
        setOffset(selectedPage + 1)
    };

    useEffect(() => {
        getDataBooks();
    }, [])


    //if(!data) return <Error />
    //filtering
    //https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey

    //sorting
    //https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=yourAPIKey

    const dataBooks = show === "true" ? <Modal setShow={setShow} bookItem={bookItem}/> : <Cards setShow={setShow} data={booksPag} setBookItem={setBookItem} handlePageClick={handlePageClick} pageCount={pageCount}/> 

    return (
        <div className="main">

            <Header setValue={setValue} getDataBooks={getDataBooks} setOrder={setOrder} setCategories={setCategories}/>
            <div className="countBooks">
                {
                    books.length > 0 && <p>Found: {books.length}</p>
                }
            </div>

            {
                loading ? <Loading /> : booksPag ? dataBooks : <Error />
            }

        </div>
    )
}

export default Main;

