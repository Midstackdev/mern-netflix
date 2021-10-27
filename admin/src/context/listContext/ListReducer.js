const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTS_START":
            return {
                lists: [],
                isFetching: true,
                error: false,
            }
        case "GET_LISTS_SUCCESS":
            return {
                lists: action.payload,
                isFetching: false,
                error: false,
            }
        case "GET_LISTS_FAIL":
            return {
                lists: [],
                isFetching: false,
                error: true,
            }
        case "ADD_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "ADD_LIST_SUCCESS":
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
            }
        case "ADD_LIST_FAIL":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "EDIT_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "EDIT_LIST_SUCCESS":
            return {
                lists: state.lists.map((list) => list._id === action.payload._id && action.payload),
                isFetching: false,
                error: false,
            }
        case "EDIT_LIST_FAIL":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }
        case "DELETE_LIST_SUCCESS":
            return {
                lists: state.lists.filter((list) => list._id !== action.payload),
                isFetching: false,
                error: false,
            }
        case "DELETE_LIST_FAIL":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
    
        default:
            return {...state};
    }
}

export default ListReducer