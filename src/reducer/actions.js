import getMediaAPI from "../api";
import {setValue,setLoading,setError,setData} from "./action-creators";
import transformDataAPI from "../helpers/transformDataAPI";

const getMedia = (value) => (dispatch) => {
    if(value !== '') {
        dispatch(setLoading(true));
        dispatch(setData(null));
        getMediaAPI(value)
            .then(res => {
                const data = Object
                    .entries(res.data)
                    .map(dataItem => dataItem[1].data)
                    .reduce((prevArray,currentArray) => {
                        return [...prevArray,...currentArray]
                    },[])
                    .map(transformDataAPI)

                dispatch(setLoading(false))
                dispatch(setData(data))
            })
            .catch(() => {
                dispatch(setLoading(false))
                dispatch(setError(true))
            })
    } else {

    }
}

const changeInputValue = (value) => (dispatch) => {
    dispatch(setValue(value));
    if(value === '') {
        dispatch(setData(null));
    }
}

const reset = (dispatch) => {
    dispatch(setValue(''));
    dispatch(setData(null))
}



export {
    getMedia,
    changeInputValue,
    reset
};