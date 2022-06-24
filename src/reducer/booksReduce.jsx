const GET_ALL_BOOKS = "GET_ALL_BOOKS"
const GET_PAG_BOOKS = "GET_PAG_BOOKS"

const initialState = {
    books: [],
    booksPag: []
}

export const booksReduce = (state = initialState, action) => {
    switch(action.type) {
        case GET_ALL_BOOKS: 
        return {...state, books: [ action.payload]};

        case GET_PAG_BOOKS:
            return {...state, booksPag: [...action.payload]};

        default: return state;
    }
}

export const getBooksAction = (payload) => ({type: GET_ALL_BOOKS, payload})
export const getBooksPagAction = (payload) => ({type: GET_PAG_BOOKS, payload})


