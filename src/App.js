import axios from 'axios'
import React, {useState} from 'react'

function App() {
    const [ data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b3d9a4c8e1da751c1bfcf6754be916a7`

    const searchLocation = (e) => {
      if (e.key === 'Enter'){
        //gets data from api
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        //sets location to empty string
        setLocation('')
      }
    }
      

    return (
      <div className='app'>
        <div className='search'>
          <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyPress = {searchLocation}
          placeholder='Enter Location'
          type = "text"
          />
        </div>

        <div className = "container">
          <div className='top'>
            <div className='location'>
              <p>{data.name}</p>
            </div>
            <div className='temp'>
              {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className='description'>
              {data.weather ? <h2>{data.weather[0].description}</h2> : null}
            </div>
          </div>
          <div className='bottom'>
            <div className='feels'>
              <h2>Feels</h2>
              {data.main ? <h2>{data.main.feels_like.toFixed()}°F</h2> : null}
            </div>
            <div className='humidity'>
              <h2>Humidity</h2>
              {data.main ? <h2>{data.main.humidity.toFixed()}</h2> : null}
            </div>
            <div className='wind'>
              <h2>Speed</h2>
              {data.main ? <h2>{data.wind.speed.toFixed()} MPH</h2> : null}
            </div>
          </div>
        </div>

      </div>
  );
}

export default App;
