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
    <div>
    <div className="left column">
    hello world words etc
    </div>
    <div className="right column">
    {phrase}
    </div>
    <div className="bottom row">
    </div>
    </div>
  )
}
export default LandingPageContainer
