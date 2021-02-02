import React, { Component } from 'react'
import axios from '../../axios'
import {storage} from '../../firebase/index'  

class Upload extends Component{

    state={
        hotel:{
            imageurl:null,
            name:null,
            address:null,
            description:null,
            price:null,
            rating:null,
            wifi:null,
            ac:null,
            breakfast:null,
            pool:null,
            parking:null
        },
        image:null,
        city:null,
        star:null,
    }
    storeimage=(event)=>{
        this.setState({
            image:event.target.files[0]
        })
    }

    store2=(event,name)=>{
        if(name==="city"){
            this.setState({
                city:event.target.value
            })
        }else{
            this.setState({
                star:event.target.value
            })
        }
    }

    storevalues=(event,name)=>{
        let dummyhotel={...this.state.hotel}
        dummyhotel[name]=event.target.value;
        this.setState({
            hotel:dummyhotel
        })
    }

    onsubmit=(event)=>{
        event.preventDefault();
        const uploadtask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadtask.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
           async () => {
            await storage
                .ref("images")
                .child(this.state.image.name)
                .getDownloadURL()
                .then(url=>{
                    //console.log(url)
                    let dummyhotel={...this.state.hotel}
                    dummyhotel["imageurl"]=url;
                    this.setState({
                        hotel:dummyhotel
                    })
                });
                await axios.post("hotels/"+this.state.city+"/"+this.state.star+".json",this.state.hotel)
                .then(res=>{
                    console.log(res.data)
                })
                .catch(err=>{
                    console.log("Error")
                })     
            }
        )
    }

    render(){
        //console.log(this.state.image)
        return(
            <div>
                <form>
                    <input type="file" onChange={this.storeimage}></input>
                    <input type="text" placeholder="City" onChange={(event)=>this.store2(event,"city")}></input>
                    <input type="text" placeholder="Star-Hotel" onChange={(event)=>this.store2(event,"star")}></input>
                    <input type="text" placeholder="Name" onChange={(event)=>this.storevalues(event,"name")}></input>
                    <input type="text" placeholder="Address" onChange={(event)=>this.storevalues(event,"address")}></input>
                    <input type="text" placeholder="Description" onChange={(event)=>this.storevalues(event,"description")}></input>
                    <input type="text" placeholder="Price" onChange={(event)=>this.storevalues(event,"price")}></input>
                    <input type="text" placeholder="Rating" onChange={(event)=>this.storevalues(event,"rating")}></input>
                    <div onChange={(event)=>this.storevalues(event,"wifi")}>
                        <p>Wifi</p>
                        <input type="radio" name="wifi" value="1"></input>Yes
                        <input type="radio" name="wifi" value="0"></input>No
                    </div>
                    <div onChange={(event)=>this.storevalues(event,"ac")}>
                        <p>A/C</p>
                        <input type="radio" name="ac" value="1"></input>Yes
                        <input type="radio" name="ac" value="0"></input>No
                    </div>
                    <div onChange={(event)=>this.storevalues(event,"breakfast")}>
                        <p> Free-Breakfast</p>
                        <input type="radio" name="breakfast" value="1"></input>Yes
                        <input type="radio" name="breakfast" value="0"></input>No
                    </div>
                    <div onChange={(event)=>this.storevalues(event,"pool")}>
                        <p>Pool</p>
                        <input type="radio" name="pool" value="1"></input>Yes
                        <input type="radio" name="pool" value="0"></input>No
                    </div>
                    <div onChange={(event)=>this.storevalues(event,"parking")}>
                        <p>Parking</p>
                        <input type="radio" name="parking" value="1"></input>Yes
                        <input type="radio" name="parking" value="0"></input>No
                    </div>
                    <button onClick={this.onsubmit}>Save</button>
                </form>
             </div>
        )
    }
}

export default Upload;