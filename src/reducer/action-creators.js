import {
    SET_DATA,
    SET_ERROR,
    SET_LOADING,
    SET_VALUE
} from "./action-types";


export const setLoading = (loading) => {
    return {
        type:SET_LOADING,
        payload:loading
    }
}

export const setError = (error) => {
    return {
        type:SET_ERROR,
        payload:error,
    }
}

export const setData = (data) => {
    return {
        type:SET_DATA,
        payload:data,
    }
}

export const setValue = (value) => {
    return {
        type:SET_VALUE,
        payload:value,
    }
}