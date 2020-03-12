import axios from "../apis/axios";

export const signup = form => async dispatch => {
    try {
        const response = await axios.post("/signup", form);
        dispatch({
            type: "AUTH_USER",
            payload: response.data
        });
    } catch (e) {
        dispatch({
            type: "AUTH_ERROR",
            payload: "Email in use"
        });
    }
};