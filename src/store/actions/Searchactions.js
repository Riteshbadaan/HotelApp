import axios from '../../axios'

export const searchsuccess = (hotels,details) => {
    return{
        type:"SEARCH_SUCCESS",
        hotels:hotels,
        date1:details.date1,
        date2:details.date2,
        rooms:details.rooms
    }
}

export const logout = () => {
    return{
        type:"LOGOUT"
    }
}

export const search = (details) => {
    return dispatch => {
        let url="/hotels/"+details.city+"/"+details.rating+".json"
        // console.log(url);
        axios.get(url)
        .then(res=>{
            //console.log(res.data)
            dispatch(searchsuccess(res.data,details))
        })
        .catch(err=>{
            console.log("Error in search reducer")
        })
    }
}