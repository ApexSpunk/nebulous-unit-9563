import { CHANGE_THEME, GET_THEME } from "./actionTypes"

export const getTheme = () => async (dispatch) => {
    dispatch({ type: GET_THEME })
}

export const changeTheme = (theme) => async (dispatch) => {
    if (theme === 'light') {
        dispatch({ type: CHANGE_THEME, payload: { textColor: 'black' } })
    }
    if (theme === 'dark') {
        dispatch({ type: CHANGE_THEME, payload: { textColor: 'white' } })
    }
}
