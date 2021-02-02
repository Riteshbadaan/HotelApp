let intialstate={
    hotels:null,
    date1:null,
    date2:null,
    numrooms:null,
}

const reducer = (state=intialstate,action) => {
    switch(action.type){
        case "SEARCH_SUCCESS":
            return{
                ...state,
                hotels:action.hotels,
                date1:action.date1,
                date2:action.date2,
                numrooms:action.rooms
            }
        case "LOGOUT":
            return{
                hotels:null,
                date1:null,
                date2:null,
                numrooms:null
            }    
    }
    return state;
}

export default reducer;