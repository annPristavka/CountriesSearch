import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import { booksReduce } from '../reducer/booksReduce';


const  rootReduce = combineReducers({
    books: booksReduce
})


const store = configureStore({
    reducer: rootReduce
})


export default store;