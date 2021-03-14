import React from 'react';
import Nav from "./nav";

const Rover2 = () => {

  return (
    <div>
      <Nav/>
      <div class = "rover-page">

        <div class = "name-holder"><text class = "rover-name">Opportunity</text></div>
        <div class = "description-holder"><text class = "rover-description">
          Opportunity was the rover that along with Spirit launched in 2003 to land on Mars and begin traversing the Red Planet in search of signs of past life.
          It has made a number of discoveries about the Red Planet including evidence that Mars may once have been able to sustain microbial life. Opportunity exceeded its life expectancy by 60 times and had traveled more than 28 miles (45 kilometers) by the time it reached its appropriate final resting spot on Mars – Perseverance Valley. The rover stopped communicating with Earth when a severe Mars-wide dust storm blanketed its location in June 2018.
        </text></div>

        <div class = "name-holder"><text class = "rover-name">About</text></div>
        <div class = "whole-card-holder">
          <div class = "card-holder"><img class = "rover-card" id="opport_img" src = "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/16q3/669461/we-drive-the-mars-opportunity-rover-review-car-and-driver-photo-671067-s-original.jpg" alt = "curiosity"/></div>
          <div class = "card-table-holder"><table class = "card-table" cellSpacing = "0">
            <tr class = "row-type-b">
              <td>Mission Name</td>
              <td>Mars Exploration Rover</td>
            </tr>
            <tr class = "row-type-a">
              <td>Rover Name</td>
              <td>Opportunity</td>
            </tr>
            <tr class = "row-type-b">
              <td>Size</td>
              <td>7.5 feet</td>
            </tr>
            <tr class = "row-type-a">
              <td>Rover Mass</td>
              <td>2,343 Pounds</td>
            </tr>
            <tr class = "row-type-b">
              <td>Rocket</td>
              <td>Delta II 7925H-9.5</td>
            </tr>
            <tr class = "row-type-a">
              <td>Launch Date</td>
              <td>July 8, 2003</td>
            </tr>
            <tr class = "row-type-b">
              <td>Land Date</td>
              <td>January 25, 2004</td>
            </tr>
            </table></div>
        </div>
        <div class = "name-holder"><text class = "rover-name">Recent Photos</text></div>

    </div>
    </div>
  );
};

export default Rover2;
