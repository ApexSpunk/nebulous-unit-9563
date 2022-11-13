import { CHANGE_THEME, GET_THEME } from "./actionTypes"

const initialState = {
    theme: { textColor: "white" }
}

export default function themeReducer(state = initialState, action) {
    switch (action.type) {
        case GET_THEME:
            return { ...state, theme: action.payload }
        case CHANGE_THEME:
            return { ...state, theme: action.payload }
        default:
            return state
    }
}