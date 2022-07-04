import './App.css';
import { useEffect, useState } from 'react';
// import { getScoreboard } from './utils/getScoreboard';
import axios from 'axios';




function App() {
  const [average, setAverage] = useState('')
  const [scoreboard, setScoreboard] = useState('')

  
  let baseURL1 = 'http://localhost:3001/average'
  let baseURL2 = 'http://localhost:3001/scoreboard'

  
  const getAverage = async () => {
    try {
      const res = await axios.get(baseURL1);
      setAverage(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const getScoreboard = async () => {
    try {
      const res = await axios.get(baseURL2);
      console.log(res)
      setScoreboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getAverage();
    getScoreboard()
    // eslint-disable-next-line 
  }, []);

  console.log(Object.keys(scoreboard));
  console.log(Object.values(scoreboard));


  return (
    <div className="App">
<h1>CS GO - Statics </h1>

<div>
      <h2>Average time per match</h2>
      <h3>{average}</h3>
</div>


<div>
  <h2>round</h2>


{Object.keys(scoreboard).map((key)=>(
                <p>{"Round :" + key}{'Counter Terrorist  ' + scoreboard[`${key}`] + "  Terrorist"}</p>
            ))}





</div>

    </div>
  );
}

export default App;
