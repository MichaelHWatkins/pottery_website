import React, { useState, useEffect } from 'react';
import banner from '../../../assets/images/banner.png'
import backpacking from '../../../assets/images/backpacking.png'
import camping from '../../../assets/images/camping.png'
import hiking from '../../../assets/images/hiking.png'

const LandingPageContainer = (props) =>{

  const textArray = [<img alt="backpacking" src={backpacking} />, <img alt="camping" src={camping} />,<img alt="hiking" src={hiking} />]

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
      <div className="row topRow">
      <div className="col leftColumn">
        <h1>hello world words etc</h1>
        <h1>hello world words etc</h1>
        <h1>hello world words etc</h1>
        <img alt="backpacking" src={backpacking} />
      </div>
      <div className="col rightColumn">
        {phrase}
      </div>
      </div>
      <div className="row bottomRow">
        <div className="col">
          <h2><button>Backpacking</button></h2>
        </div>
        <div className="col">
          <h2><button>Camping</button></h2>
        </div>
        <div className="col">
          <h2><button>Hiking</button></h2>
        </div>
      </div>
    </div>
  )
}
export default LandingPageContainer
