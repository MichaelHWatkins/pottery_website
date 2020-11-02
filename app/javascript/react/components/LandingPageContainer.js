import React, { useState, useEffect } from 'react';
import banner from '../../../assets/images/rainbowsLogo-1.png'
import hi from '../../../assets/images/HI.jpg'
import storeFront from '../../../assets/images/storeFront.jpg'
import thomasplate from '../../../assets/images/thomasplate.jpg'



const LandingPageContainer = (props) =>{

  const textArray = [<img alt="HI" src={hi}/>, <img alt="storeFront" src={storeFront}/>,<img alt="thomasplate" src={thomasplate}/>]

  const [seconds, setSeconds] = useState(0);
  const [phrase, setPhrase] = useState(textArray[seconds % textArray.length])
  const [loop, setLoop] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 3000);
  }, []);

  useEffect(() => {
    if (loop === true) {
      setPhrase(textArray[seconds % textArray.length])
    }
  })

  return (

    <div className="container">
    <div className="row header">
      <img alt="banner" src={banner} />
    </div>
    <div className="row midReel">
      {phrase}
    </div>
    <div className="row bottomRow">
      <div className="col">
        <h2><button>Contact Us</button></h2>
      </div>
      <div className="col">
        <h2><button>About The Owner</button></h2>
      </div>
      <div className="col">
        <h2><button>Gallery</button></h2>
      </div>
    </div>
    </div>
  )
}
export default LandingPageContainer
