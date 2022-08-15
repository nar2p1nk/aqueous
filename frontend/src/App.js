import React,{useEffect, useState} from 'react';
import ReactWeather,{useOpenWeather} from 'react-open-weather';
import {Hint} from 'react-autocomplete-hint';
import axios from 'axios';
import './App.css';
function App() {

  const [countriesNames,setCountriesNames] = useState([])

  const [countryNameOrCode,setCountryNameOrCode] = useState('')

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
    axios.post(
      'http://localhost:8080/getLanLong',
      {countryName:countryNameOrCode}
    )
      .then((res)=>{
        console.log(res.data)
      })
  }
  useEffect(()=>{
    axios.get('http://localhost:8080/allCountriesNames')
      .then((res)=>{
        setCountriesNames(res.data)
        console.log(countriesNames)
        return;
      })
  },[null])
  return (
    <div className="App">
      <div className='main' style={results ? {display:'none'} : {}}>
      <span className='title'>Welcome to aqueous!</span>
        <p className="description">Get your current weather forecast now!</p>
        <form className='form' method='POST' onSubmit={(e)=>{onSubmitForm(e)}}>
          <Hint options={countriesNames} allowTabFill>
            <input type="text" value={countryNameOrCode}
            onChange={(e) =>
          {onChangeValue(e,countryNameOrCode,setCountryNameOrCode)}} /> 
          </Hint>
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
