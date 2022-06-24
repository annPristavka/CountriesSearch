import {getBooksAction} from '../reducer/booksReduce'

export function fetchCustomers() {
    return function (dispatch){
        fetch('https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyACAECI5Xk3HkHRkteZ1Bdiyj8WDHeIYFk&maxResults=30')
        .then(response => response.json())
        .then(json => dispatch(getBooksAction(json.items)))
    }
}