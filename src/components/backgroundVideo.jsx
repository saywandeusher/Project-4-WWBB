import React from 'react';
import ReactPlayer from 'react-player'
 
export default class BgVid extends React.Component {
  render() {

    return (
      <ReactPlayer url='https://www.youtube.com/watch?v=O29_Gw_Fvm8'           
      width='100%'
      height='100%' 
      playing
      muted='true'
      loop='true'
       />
    );
  }
}