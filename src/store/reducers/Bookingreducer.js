let intialstate={
    bookings:[]
}

const reducer = (state=intialstate,action) => {
    switch(action.type){
        case "FETCH_SUCCESS":
            return{
                ...state,
                bookings:action.bookings
            }
    }
    return state;
}

export default reducer;