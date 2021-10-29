import axios from "axios"
import { loginFail, loginStart, loginSuccess, logOut } from "./AuthActions"

export const login = async (formData, dispatch) => {
    dispatch(loginStart())
    try {
        const {data} = await axios.post(`auth/login`, formData)
        dispatch(loginSuccess(data))
    } catch (error) {
        dispatch(loginFail())
    }
}

export const logout = (dispatch) => {
    dispatch(logOut())
}