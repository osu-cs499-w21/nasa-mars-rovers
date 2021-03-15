import React from 'react';
import Nav from "./nav";
import CuriosityImg from "./rover1_pics";
//import {useHistory} from 'react-router-dom';

const Rover1 = () => {

  

  return (
    <div>
      <Nav/>
      <div class = "rover-page">

        <div class = "name-holder"><text class = "rover-name">Curiosity</text></div>
        <div class = "description-holder"><text class = "rover-description">Curiosity is the third rover sent to Mars, launching on November 26, 2011 and landing nine months later on August 5, 2012. The Curiosity rover has six wheels and eight cameras, containing a functional arm that can reach up to seven feet. Curiosity is built using a hardened body to protect itself from the harsh environment on Mars. The rover is still functioning today, sending and recieving informtation from NASA every day.</text></div>

        <div class = "name-holder"><text class = "rover-name">About</text></div>
        <div class = "whole-card-holder">
          <div class = "card-holder"><img class = "rover-card" src = "https://mars.nasa.gov/system/feature_items/images/6037_msl_banner.jpg" alt = "curiosity"/></div>
          <div class = "card-table-holder"><table class = "card-table" cellSpacing = "0">
            <tr class = "row-type-b">
              <td>Mission Name</td>
              <td>Mars Science Laboritory</td>
            </tr>
            <tr class = "row-type-a">
              <td>Rover Name</td>
              <td>Curiosity</td>
            </tr>
            <tr class = "row-type-b">
              <td>Size</td>
              <td>10 feet</td>
            </tr>
            <tr class = "row-type-a">
              <td>Rover Mass</td>
              <td>1,982 Pounds</td>
            </tr>
            <tr class = "row-type-b">
              <td>Rocket</td>
              <td>Atlas V 541</td>
            </tr>
            <tr class = "row-type-a">
              <td>Launch Date</td>
              <td>November 26, 2011</td>
            </tr>
            <tr class = "row-type-b">
              <td>Land Date</td>
              <td>August 5, 2012</td>
            </tr>
            </table></div>
        </div>

        <div class = "name-holder"><text class = "rover-name">Cameras</text></div>
        <CuriosityImg/>
    </div>
    </div>
  );

};

export default Rover1;
