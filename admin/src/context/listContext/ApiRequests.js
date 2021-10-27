import axios from 'axios'
import { addListFail, addListStart, addListSuccess, deleteListFail, deleteListStart, deleteListSuccess, editListFail, editListStart, editListSuccess, getListsFail, getListsStart, getListsSuccess } from './ListActions'

export const getLists = async (dispatch) => {
    dispatch(getListsStart())

    try {
        const {data} = await axios.get('/lists')
        dispatch(getListsSuccess(data))
    } catch (error) {
        dispatch(getListsFail())
    }
}

export const addList = async (formData, dispatch) => {
    dispatch(addListStart())

    try {
        const {data} = await axios.post('/lists', formData)
        dispatch(addListSuccess(data))
    } catch (error) {
        dispatch(addListFail())
    }
}

export const updateList = async (id, formData, dispatch) => {
    dispatch(editListStart())

    try {
        const {data} = await axios.put(`/lists/${id}`, formData)
        dispatch(editListSuccess(data))
    } catch (error) {
        dispatch(editListFail())
    }
}

export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart())

    try {
        await axios.delete(`/lists/${id}`)
        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFail())
    }
}

