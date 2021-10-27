export const getListsStart = () => ({
    type: "GET_LISTS_START"
})

export const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
})

export const getListsFail = () => ({
    type: "GET_LISTS_FAIL",

})

export const addListStart = () => ({
    type: "ADD_LIST_START"
})

export const addListSuccess = (list) => ({
    type: "ADD_LIST_SUCCESS",
    payload: list
})

export const addListFail = () => ({
    type: "ADD_LIST_FAIL",

})

export const editListStart = () => ({
    type: "EDIT_LIST_START"
})

export const editListSuccess = (id) => ({
    type: "EDIT_LIST_SUCCESS",
    payload: id
})

export const editListFail = () => ({
    type: "EDIT_LIST_FAIL",

})

export const deleteListStart = () => ({
    type: "DELETE_LIST_START"
})

export const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
})

export const deleteListFail = () => ({
    type: "DELETE_LIST_FAIL",

})

