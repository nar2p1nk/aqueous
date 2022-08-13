import React,{useEffect, useState} from 'react';
import ReactWeather,{useOpenWeather} from 'react-open-weather';
import getAllCountries from './database';
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle';
import './App.css';

function App() {

  const [countries,setCountries] = useState([])

  const [countrynameOrCode,setCountryNameOrCode] = useState('')

  const [results,setResults] = useState(false)

  const {data,isLoading,errorMessage} = useOpenWeather({
    key:'09837498dea54af38d04ed82007c8cdc',
    lat:2.5,
    lon:112.5,
    lang:'en',
    unit:'metric'
  })

  const onChangeValue = (event,usestate,setUsestate) =>{
    setUsestate(event.target.value)
    console.log(usestate)
  }

  const onSubmitForm = (event) =>{
    event.preventDefault();
    console.log(countrynameOrCode)
  }

  useEffect(()=>{
    setCountries(getAllCountries())
    console.log(countries)
  })

  return (
    <div className="App">
      <div className='main' style={results ? {display:'none'} : {}}>
      <span className='title'>Welcome to aqueous!</span>
        <p className="description">Get your current weather forecast now!</p>
        <form action="" method='POST' onSubmit={(e)=>{onSubmitForm(e)}}>
          <input type="text" value={countrynameOrCode}
          onChange={(e) =>
          {onChangeValue(e,countrynameOrCode,setCountryNameOrCode)}} /> 
          <button value='post'>submit</button>
        </form>
      </div>
      <div className='weather-component' style={results ? {} : {display:'none'}}>
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
