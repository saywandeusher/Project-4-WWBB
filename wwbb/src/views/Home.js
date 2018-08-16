import React from 'react';
import Form from '../components/form';
import '../styles/home.css'
import BgVid from '../components/backgroundVideo'
import Parallax from 'react-springy-parallax'

export default class Home extends React.Component {

  render() {
    return (
      <Parallax ref='parallax' pages={3}>
      <div id="home" className="home-content">

        <div className="home-content-1">
          <div className="home-content-1-overlay">
          <Parallax.Layer offset={0} speed={0.5}>
            <div className="home-content-1-text">
              <hr />
              <h1>Singapore's Best Entertainment Dance Crew</h1>
              <hr />
            </div>
            </Parallax.Layer>
          </div>
          <div className="home-content-1-bgvid" style={{"backgroundColor" : "blue"}}>
            {/* <BgVid /> */}
          </div>   
        </div>

        <div className="home-content-2">
          
          <Parallax.Layer offset={0} speed={0.5}>
          <div className="home-content-2-text">
            <h2>How we started?</h2>
            <br />
            <p>WE WILL BE BACK aka WWBB, Japanese pronunciation: (watashitachi wa modotte kuru) is a Japanese idol girl group. As of December 2013, the wwbb whatsapp group has 18 members. The girls range in age from early teens to mid-20s. Produced by Maria Ozawa aka flowerboy, it is one of the highest-earning musical acts in the world, with 2012 record sales of over US$226 in Japan. It has achieved such popularity in Japan that it has been characterised as a social phenomenon. PS. Actually we are a group of dancers that does the "enjoy" style</p>
          </div>
          </Parallax.Layer>
          
          <Parallax.Layer
                // Page offset, or where the layer will be at when scrolled to
                // 0 means start, 1 second page, 1.5 second and half, and so on ...
                offset={0}
                // Parallax factor, allows for positive and negative values
                // Shifts the layer up or down in accordance to its offset
                speed={0.5}>
                
                <img src="./images/blackeyedpeas.png" width="400" height="auto" />
                
            </Parallax.Layer>
            
            
        </div>
        

        <div className="home-content-3">
          <Form />
        </div>



      </div>
      </Parallax>
      
    );
  }
}