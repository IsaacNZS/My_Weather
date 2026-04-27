import HuminityWind from "./components/Huminity&Wind";
import Photo from "./components/Photo";
import Search from "./components/Search";
import "./index.css";
import { useEffect, useState } from "react";

export type WeatherData = {
  data: {
    request: [
      {
        query: string;
      },
    ];
    weather: [
      {
        date: string;
        hourly: [
          {
            time: string;
            tempC: string;
            windspeedMiles: string;
            weatherIconUrl: [
              {
                value: string;
              },
            ];
            weatherDesc: [
              {
                value: string;
              },
            ];
            humidity: string;
            pressure: string;
            chanceofrain: string;
          },
        ];
      },
    ];
  };
};

export type search = {
  name: string;
};

function App() {
  const [city, setCity] = useState("Nay Pyi Taw");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [search, setSearch] = useState<search | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (searchCity: string) => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${searchCity}&format=json`,
      );
      const data1 = await res.json();
      if (!data1.length) throw new Error("City not found");
      setSearch(data1[0]);
      let lat = data1[0].lat;
      let lon = data1[0].lon;
      const response = await fetch(
        `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=24f4b65300ff432a95103254262604&q=${lat},${lon}&format=json&num_of_days=5`,
      );
      if (!response.ok) throw new Error("Error");
      const data = await response.json();
      setCity(searchCity);
      setWeather(data);
      setError("");
    } catch (err) {
      setError("This City Not Found");
      setWeather(null);
      setSearch(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Nay Pyi Taw");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Search city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <div className="flex flex-col items-center w-[95%]">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <Photo weather={search} />
        <HuminityWind weather={weather} />
      </div>
      <br />
    </div>
  );
}
export default App;
