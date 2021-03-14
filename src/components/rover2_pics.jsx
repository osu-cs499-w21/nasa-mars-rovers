import React, { Component } from 'react';


class Opport_Img extends Component {
  constructor() {
    super();
    this.state = {
      latest_photos: []
    };
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=Nq0SfwbF2davR5zNYTBYenTMiaENV9tCdFicvjVb')
    .then((response) => response.json())
       .then((allData) => {
           this.setState({latest_photos: allData});
           if(allData.latest_photos.length>0)
            console.log(allData);
           /* the following are url's of recent photos */
           for(var i = 0; i< allData.latest_photos.length; i++)
              console.log(allData.latest_photos[i].img_src);
       })
  }

  /* I'm trying to actually access the img url from data like above via console.log */
  /*{this.state.latest_photos.map((photo, key) => {
      return <p>{photo[key].img_src}</p>
    })} - I'm getting "this.state.latest_photos.map is not a function"*/

  /* nothing displays here */
  render() {
    return (
      <div>
        {Object.keys(this.state.latest_photos).map(key => {
          return <p>{this.state.latest_photos.[key].img_src}</p>
        })}
      </div>
    );
  }
}


export default Opport_Img;
