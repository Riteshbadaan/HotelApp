import axios from 'axios'

export const authstart = () => {
    return{
        type:"AUTH_START"
    }
}

export const authsuccess = (token,userid) => {
    return{
        type:"AUTH_SUCCESS",
        token:token,
        userid:userid
    }
}

export const authfail = (error) => {
    return{
        type:"AUTH_FAIL",
        error:error
    }
}
export const logout=()=>{
    return{
        type:"LOGOUT"
    }
}
export const booksuccess=(details)=>{
    return{
        type:"BOOK_HOTEL",
        details:details
    }
}
export const bookhotel=(token,details,route)=>{
    // console.log("Route",route)
    return async dispatch=>{
        await axios.post("https://hotelapp-f223c.firebaseio.com/bookings.json?auth+"+token,details)
        .then(res=>{
            dispatch(booksuccess(details));
        })
        .catch(err=>{
            console.log(err);
        })
    await route.push("/bookings");
    }
}

export const auth = (email,password,siginup,route) => {
    let authdata={
        email:email,
        password:password,
        returnSecureToken:true
    }
    let nexturl="/account";
    let url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxcsB7Wsoy3OFDVFWrsxd9MsiTKw1s6Wk";
    if(!siginup){
        url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxcsB7Wsoy3OFDVFWrsxd9MsiTKw1s6Wk"
        nexturl="/search"
    }
    return async dispatch => {
        dispatch(authstart())
        await axios.post(url,authdata)
        .then(res=>{
            console.log(res.data)
            dispatch(authsuccess(res.data.idToken,res.data.localId))
            if(siginup){
                let userobj={
                    firstname:null,
                    surname:null,
                    contactnumber:null,
                    address:null,
                    userId:res.data.localId
                }
            axios.post("https://hotelapp-f223c.firebaseio.com/users.json",userobj)
                .then(res=>{
                    console.log("Success in User data")
                })
                .catch(err=>{
                    console.log("Error in User data")
                })
            }
            route.push(nexturl)
        })
        .catch(err=>{
            console.log(err);
            dispatch(authfail(err.response.data.error))
        })
        // console.log("before url")
        
    }
}