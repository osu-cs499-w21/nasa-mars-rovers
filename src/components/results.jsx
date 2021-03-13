import React, {useState, useEffect} from 'react';
import Nav from "./nav";
import {useHistory, withRouter} from 'react-router-dom';

const Results =() => {
    const API_KEY = "Nq0SfwbF2davR5zNYTBYenTMiaENV9tCdFicvjVb";
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var parts = window.location.search.split('=')[1].split(',');
    var newDate = new Date();
    var dateParts = parts[1].split('-');
    newDate.setFullYear(dateParts[0],dateParts[1],dateParts[2]);
    const [photos, setPhotos] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        let ignore = false;
        const controller = new AbortController();
        async function fetchPhotos(){
            console.log("trying to get photos");
            let responseBody = {};
            try{
                if(parts[2] !== "all"){
                    const res = await fetch(
                        `https://api.nasa.gov/mars-photos/api/v1/rovers/${parts[0]}/photos?earth_date=${parts[1]}&camera=${parts[2]}&api_key=${API_KEY}`  //
                    )
                    responseBody = await res.json();
                } else {
                    const res = await fetch(
                        `https://api.nasa.gov/mars-photos/api/v1/rovers/${parts[0]}/photos?earth_date=${parts[1]}&api_key=${API_KEY}`  //
                    )
                    responseBody = await res.json();
                    console.log("Returned: ", responseBody.photos);
                }
            } catch(e) {
                if(e instanceof DOMException) {
                    console.log("Request Aborted");
                    console.log(e)
                } else {
                    console.log(e);
                }
            }
            if(!ignore){
                setPhotos(responseBody.photos || []);
                console.log(photos);
            }

            if(parts){
                fetchPhotos();
            }
            return() =>{
                controller.abort();
                ignore = true;
            }
        }
    }, [parts]);


    return (
        <div>
            <Nav />
            <div style={{marginTop:"150px"}}>
                <h1>Photos for {parts[0].toUpperCase()} on {months[newDate.getMonth()]} {newDate.getDate()}, {newDate.getFullYear()}</h1>
                <div style={{display: "inline-flex", width:"100%", flexWrap:"wrap"}}>

                </div>
            </div>
        </div>
    )
}

export default Results;