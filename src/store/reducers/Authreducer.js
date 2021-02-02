let intialstate={
    token:null,
    userid:null,
    loading:false,
    error:null,
    orderdetails:null,
}
const Authreducer = (state=intialstate,action) => {
    switch(action.type){
        case 'AUTH_SUCCESS':
            return{
                ...state,
                token:action.token,
                userid:action.userid,
                loading:false,
                error:null
            }
        case "AUTH_FAIL":
            return{
                ...state,
                error:action.error,
                loading:false
            }
        case "AUTH_START":
            return{
                ...state,
                loading:true,
                error:null
            }       
        case "BOOK_HOTEL":
            return{
                ...state,
                orderdetails:action.details
            }    
        case "LOGOUT":
            return{
                ...state,
                token:null,
                userid:null
            }     
    }
    return state;
}

export default Authreducer