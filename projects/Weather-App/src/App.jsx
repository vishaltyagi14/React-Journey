  import { useState } from "react";
  import "./App.css";
  import axios from "axios";
  import useAxios from "./hooks/useAxios";
  import useDeboounce from "./hooks/useDeboounce";
  function App() {
    const [location, setLocation] = useState('')
    const searchFor = useDeboounce(location, 500)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchFor}&units=metric&APPID=7da0d5cf6819c046d534c9407462d590`;
    const {data, error, loading} = useAxios(url)


    return (
      <>
        <div className="app">
          <div id="search" className="text-center p-4">
            <input type="search" value={location} onChange={(e)=>{setLocation(e.target.value)}} placeholder="Enter Location" 
            className="px-8 py-2 rounded-3xl border-1 w-87.5 outline-none" />
          </div>
          {/* Main container */}
          <div className="max-w-[700px] h-auto m-auto px-4 py-0 relative top-[10%] flex flex-col gap-8">
            {data.name!=undefined ? ( <>
            {/* Top section - Main weather info */}
            <div id="top" className="w-full bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              {/* Location */}
              <div id="location" className="mb-4">
                <p className="text-lg font-light tracking-wide opacity-90">📍 {data?.name || 'City'}</p>
              </div>
              {/* Temperature */}
              <div id="temp" className="mb-6">
                {data.main? <h1 className="text-8xl font-bold drop-shadow-lg">{Math.round(data.main.temp) }°C</h1>:<h2 className="text-3xl">Search a location First</h2>}
               
              </div>
              {/* Description */}
              <div id="desc">
                {data.weather ? <p className="text-3xl font-light opacity-95">☁️ {data.weather[0].main}</p>: <p className="text-3xl font-light opacity-95">☁️ Search a location</p>}
              </div>
            </div>

            {/* Bottom section - Weather details */}
            <div id="bottom" className="grid grid-cols-3 gap-4 w-full">
              {/* Feels like */}
              <div id="feels" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:bg-white/20 transition-all">
                <p className="text-sm font-light opacity-75 mb-2">Feels Like</p>
                {data.main? <p className="text-4xl font-semibold"> {Math.round(data.main.feels_like) }</p>: <p className="text-4xl font-semibold"> Null </p>}
                
              </div>
              {/* Humidity */}
              <div id="humidity" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:bg-white/20 transition-all">
                <p className="text-sm font-light opacity-75 mb-2">Humidity</p>
                {data.main?<p className="text-4xl font-semibold">{data.main.humidity}%</p>:<p className="text-4xl font-semibold">Null%</p>}
              </div>
              {/* Wind */}
              <div id="wind" className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:bg-white/20 transition-all">
                <p className="text-sm font-light opacity-75 mb-2">Wind Speed</p>
                {data.main?  <p className="text-4xl font-semibold">{ Math.round(data.wind.speed) } MPH</p>: <p className="text-4xl font-semibold">Null MPH</p>}
               
              </div>
            </div>
            </>):<h2 className="text-center text-4xl">Please Enter a Location</h2>}
          </div>
        </div>
      </>
    );
  }

  export default App;
