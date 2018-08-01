const axios = require('axios');

//---------------thunk-----------------//
export const fetchData = () => {
    return(dispatch => {
        axios.get("http://localhost:9001")
            .then(res => {
                dispatch(getAll(res.data));
            })
            .catch(err => console.log(err));
    })
}

export const addToList = (id) => {
    return(dispatch => {
        axios.post("http://localhost:9001/mylists/" + id)
            .then(res => {
                dispatch(fetchData())
            })
            .catch(err => console.log(err));
    })
}

export const RemoveFromList = (id) => {
    return(dispatch => {
        axios.post("http://localhost:9001/recommendations/" + id)
            .then(res => {
                dispatch(fetchData())
            })
            .catch(err => console.log(err));
    })
}

const getAll = (data) => {
    return {
        type: "GET",
        data: data
    }
}