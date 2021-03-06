import React from 'react';
import MediaContent from '../components/mediacontent';
import Form from '../components/form';
export default class Media extends React.Component {

  render() {
    return (
      <div id="media" className="main-content">

        <div className="media-content-1">
          <h1>Media</h1>
          <h3>Check out some of our works.</h3>
        </div>

        <div className="media-content-2">
          <MediaContent />
        </div>

        <div className="media-content-3">
          <Form />
        </div>

      </div>
    );
  }
}