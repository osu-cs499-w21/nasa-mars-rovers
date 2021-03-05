import React from 'react';
import mars from '../images/mars2.png'; /* or mars1 */


/* navigation panel is here */
const Nav = () => {

  return (
    <div className="nav_class">
      <ul className="nav_list">
        <li id="nav_item"><a href="/"><img id="mars_img" src={mars}/></a></li>
        <li id="nav_item"><a href="/search">Search</a></li>
        <li id="nav_item"><a href="/rover1">Rover 1</a></li>
        <li id="nav_item"><a href="/rover2">Rover 2</a></li>
        <li id="nav_item"><a href="/rover3">Rover 3</a></li>
        <li id="nav_item"><a>Earth Date</a></li>
      </ul>
    </div>
  );

};

export default Nav;
