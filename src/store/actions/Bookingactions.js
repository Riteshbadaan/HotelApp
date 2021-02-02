import axios from '../../axios';

export const fetchsuccess = bookings => {
    return{
        type:"FETCH_SUCCESS",
        bookings:bookings
    }
}

export const fetchbookings = (token,userid) => {
    return dispatch => {
        axios.get("https://hotelapp-f223c.firebaseio.com/bookings.json?auth="+token+'&orderBy="userId"&equalTo="'+userid+'"')
        .then(res=>{
            dispatch(fetchsuccess(res.data))
        })
        .catch(err=>{
            console.log("Error in Booking Section")
        })
    }
}