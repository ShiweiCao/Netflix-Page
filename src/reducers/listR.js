const initialState = {
    mylist: [],
    recommendations: [],
}

const listR = (state=initialState, action) => {
    switch(action.type) {
        case "GET": 
            return {...action.data};
        default: 
            return state;
    }
}
export default listR;