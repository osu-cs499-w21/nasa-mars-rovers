import React from 'react';
import Nav from "./nav";
import {useHistory} from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();
  var cameras = {'curiosity':['all','fhaz','rhaz','mast','chemcam','mahli','mardi','navcam'], 'opportunity':['all','fhaz','rhaz','navcam','pancam','minites'], 'spirit':['all','fhaz','rhaz','navcam','pancam','minites']};
  if(dd<10){
    dd = '0'+dd;
  }
  mm = parseInt(mm) + 1;
  if(mm<10){
    mm = '0'+mm;
  }
  
  var maxDay = yyyy + '-' + (mm) + '-' + dd;

  function updateCameras(){
    var rover = document.getElementById("rovers").value;
    var selectCams = cameras[rover];
    var camOptions = document.getElementById("cameraSelection");
    if(selectCams){
      var reset = document.querySelectorAll("#cameraSelection option");
      reset.forEach(opt => opt.remove());
      for(var i = 0; i< selectCams.length; i++){
        var option = document.createElement("option");
        option.value = selectCams[i];
        selectCams[i] = selectCams[i].charAt(0).toUpperCase() + selectCams[i].slice(1);
        option.text = selectCams[i];
        camOptions.add(option);
      }
    }
  }

  function roverSearch(e) {
    e.preventDefault();
    var rover = document.getElementById("rovers").value;
    var useDate = document.getElementById("findDate").value;
    var camera = document.getElementById("cameraSelection").value;
    history.push(`/results?=${rover},${useDate},${camera}`);
  }

  return (
    <div>
      <Nav/>
      <div style={{marginTop:"150px"}}>
        <form>
          <label>Select a Rover: </label>
          <select id="rovers" onChange={updateCameras} defaultValue="--">
            <option>--</option>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity</option>
            <option value="spirit">Spirit</option>
          </select>
          <br/>
          <label>Select a Date: </label>
          <input type="date" id="findDate" max={maxDay}></input>
          <br/>
          <label>Select a camera: </label>
          <select id="cameraSelection">
            <option>---</option>
          </select>
          <br/>
          <br/>
          <button type="submit" onClick={roverSearch}>Search</button>
        </form>
      </div>
    </div>
  );

};

export default Search;
