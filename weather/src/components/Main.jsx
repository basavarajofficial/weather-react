/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { setFunction } from "./icons";
import Card from "./Card";

function Main() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bengaluru");
  const [icon, setIcon] = useState(null);



  useEffect(() => {

    async function getWeatherData() {
      //   const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=b8ef5d8cbca6753fb9c659635103c723`;
      
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b8ef5d8cbca6753fb9c659635103c723`;

      try {
        let response = await fetch(api);
        let datas = await response.json();
        setCity(datas);
        if(datas.name){
            setIcon(datas.weather[0].icon)
        }
      } catch (err) {
        console.log("city not found : ", err.message);
      }
    }
    getWeatherData();
  }, [search]);


  console.log(icon);
  console.log(city);

  return (
    <div id="map">
      <header>
        <h1>Welcome to Weather App</h1>
      </header>
      <input className="searchBar"
        type="search"
        placeholder="search weather"
        onChange={(e) => setSearch(e.target.value)
        }
      />
      {city?.name ? (

        <Card search={search} city={city} url={setFunction(icon)} />
        // <div>
        //   <div>
        //     <div>
        //       <div
        //         style={{
        //           display: "flex",
        //           width: "100%",
        //           alignItems: "center",
        //           justifyContent: "center",
        //         }}
        //       >
        //         <h2>{search}</h2>
        //         <span>({city.sys.country})</span>
        //       </div>
        //       <h2>Temp : {city?.main?.temp}</h2>
        //       <h2>{city?.weather[0]?.description}</h2>
        //       <img src={setFunction(icon)} alt="" width={200} height={200} />
        //       <div>
        //         <p>Min Temp : {city?.main?.temp_min}</p>
        //         <p>Max Temp : {city?.main?.temp_max}</p>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      ) : (
        <h1 className="notFound">City Not Found!</h1>
      )}
    </div>
  );
}

export default Main;

// const [data, setData] = useState("");

//   if (navigator.geolocation) {
//     console.log(navigator.geolocation);

//     navigator.geolocation.getCurrentPosition(async (position) => {
//       // console.log(position);
//       let lat = position.coords.latitude;
//       let long = position.coords.longitude;

//       const data = await getWeatherData(lat, long);

//     console.log(data.name);

//     });
//   }
