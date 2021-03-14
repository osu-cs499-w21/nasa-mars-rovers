import React from 'react';
import Nav from "./nav";

const Rover3 = () => {

  return (
    <div>
      <Nav/>
      <div class = "rover-page">
        <div class = "name-holder"><text class = "rover-name">Spirit</text></div>
        <div class = "description-holder"><text class = "rover-description">
          Spirit was the rover that along with Opportunity launched in 2003 to land on Mars and studied the history of climate and water at sites on Mars where conditions may once have been favorable to life.
          Spirit uncovered strong evidence that Mars was once much wetter than it is now.
          Described as a "wonderful workhorse", Spirit operated for 6 years, 2 months, and 19 days, more than 25 times its original intended lifetime.
          The rover traveled 4.8 miles (7.73 kilometers) across the Martian plains.
          On May 25, 2011, NASA ended efforts to contact the marooned rover and declared its mission complete. The rover had been silent since March 2010.
          </text></div>

        <div class = "name-holder"><text class = "rover-name">About</text></div>
        <div class = "whole-card-holder">
          <div class = "card-holder"><img class = "rover-card" id="spirit_img" src = "https://cdn.mos.cms.futurecdn.net/EYoiusNmH87rrMTCMaBZbH.jpg" alt = "spirit"/></div>
          <div class = "card-table-holder"><table class = "card-table" cellSpacing = "0">
            <tr class = "row-type-b">
              <td>Mission Name</td>
              <td>Mars Exploration Rover</td>
            </tr>
            <tr class = "row-type-a">
              <td>Rover Name</td>
              <td>Spirit</td>
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
              <td>Delta II 7925-9.5</td>
            </tr>
            <tr class = "row-type-a">
              <td>Launch Date</td>
              <td>June 10, 2003</td>
            </tr>
            <tr class = "row-type-b">
              <td>Land Date</td>
              <td>January 4, 2004</td>
            </tr>
            </table></div>
        </div>
        <div class = "name-holder"><text class = "rover-name">Recent Photos</text></div>
      </div>
    </div>
  );

};

export default Rover3;
