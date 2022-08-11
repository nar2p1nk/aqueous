import React,{useEffect, useState} from 'react';
import ReactWeather,{useOpenWeather} from 'react-open-weather';
import './App.css';

function App() {


  const [getCountry,setGetCountry] = useState('')

  const [visible,setVisible] = useState(true)

  const {data,isLoading,errorMessage} = useOpenWeather({
    key:'09837498dea54af38d04ed82007c8cdc',
    lat:2.5,
    lon:112.5,
    lang:'en',
    unit:'metric'
  })

  return (
    <div className="App">
      <div className='weather-component' style={visible ? {visibility:'hidden'} : {}}>
       <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Malaysia"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
      />
      </div>
    </div>
  );
}

export default App;
