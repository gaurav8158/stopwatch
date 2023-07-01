import React, { useEffect, useState } from 'react'
import "./Stopwatch.css";
const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
  useEffect(()=>{
    let intervalId;
   if(isRunning){
    intervalId = setInterval(()=>{
        const now = Date.now();
        setElapsedTime(now-startTime); 
    },10);
   }  
return ()=>clearInterval(intervalId);
  },[elapsedTime,startTime]);
 const start = ()=>{
    setIsRunning(true);
setStartTime(Date.now);
  }
const stop = ()=>{
    setIsRunning(false);
    setElapsedTime(0);
}
const pause = ()=>{
    setIsRunning(false);
}
const resume = ()=>{
    setIsRunning(true);
    setStartTime(Date.now()-elapsedTime);
}
const formateTime = (time)=>{

const milliseconds = (`00${Math.floor(time % 1000)}`).slice(-3);
const seconds = (`0${Math.floor((time / 1000) % 60)}`).slice(-2);
const minutes = (`0${Math.floor((time / (1000 * 60)) % 60)}`).slice(-2);
const hours = (`0${Math.floor((time / (1000 * 60 * 60)) % 24)}`).slice(-2);
return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}
    return (
    <div className='box'>
        <div className='stopwatch'>
        <h1 >STOPWATCH</h1>
        </div>
<br />
<div className={!isRunning ? 'time-box' : 'time-box1'}>
<h1>{formateTime(elapsedTime)}</h1>
</div>
<br />
<div className='buttons'>
<button className="start btn" onClick={start}>START</button>
<button className="stop btn" onClick={stop}>STOP</button>
<button className="pause btn" onClick={pause}>PAUSE</button>
<button className="resume btn" onClick={resume}>RESUME</button>
</div>
    </div>
  )
}

export default Stopwatch