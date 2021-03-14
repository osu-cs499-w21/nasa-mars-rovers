import React from 'react';
import mars from '../images/mars2.png'; /* or mars1 */


/* navigation panel is here */
const Nav = () => {

  return (
    <div className="nav_class">
      <ul className="nav_list">
        <li id="nav_item"><a href="/"><img id="mars_img" src={mars} alt = "Home"/></a></li>
        <li id="nav_item"><a href="/search">Search</a></li>
        <li id="nav_item"><a href="/rover1">Curiosity</a></li>
        <li id="nav_item"><a href="/rover2">Oppurtunity</a></li>
        <li id="nav_item"><a href="/rover3">Spirit</a></li>
        <li id="nav_item"><a href="/">Earth Date</a></li>
      </ul>
    </div>
  );

};

export default Nav;
