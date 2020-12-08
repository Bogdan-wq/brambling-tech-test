import {
    SET_VALUE,
    SET_LOADING,
    SET_ERROR,
    SET_DATA
} from "./action-types";


const initialState = {
    loading:false,
    error:false,
    data:null,
    inputValue:'',
}

const mediaReducer = (state = initialState,action) => {

    switch (action.type) {

        case SET_LOADING:{
            return {
                ...state,
                loading:action.payload,
            }
        }

        case SET_ERROR:{
            return {
                ...state,
                error:action.payload,
            }
        }

        case SET_DATA:{
            return {
                ...state,
                data: action.payload,
            }
        }

        case SET_VALUE:{
            return {
                ...state,
                inputValue:action.payload
            }
        }

        default:{
            return state;
        }
    }
}

export default mediaReducer;