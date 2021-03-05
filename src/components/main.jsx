import React from 'react';
import Nav from "./nav";
import mars from '../images/mars2.png'; /* or mars1 */


/* the main page with welcome sign */
const Main = () => {

  return (
    <div className="main_div">
      <Nav/>
      <div>
        <h1 className="title">Hello World</h1>
      </div>

    </div>
  );

};

export default Main;
