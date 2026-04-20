import HuminityWind from "./components/Huminity&Wind";
import Photo from "./components/Photo";
import Search from "./components/Search";
import "./index.css";
import { useEffect, useState } from "react";

export type WeatherData = {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
};

function App() {
  const [city, setCity] = useState("Nay Pyi Taw");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (searchCity: string) => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=91697fb61a87ae1f04d820e527d4befd&units=metric`,
      );
      if (!response.ok) throw new Error("Error");
      const data = await response.json();
      setCity(searchCity);
      setWeather(data);
      console.log(data);
      setError("");
    } catch (err) {
      setError("This City Not Found");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Nay Pyi Taw");
  }, []);

  return (
    <div className="flex items-center justify-center bg-linear-to-r/decreasing from-indigo-500 to-teal-400 h-screen w-full">
      <div className="flex flex-col items-center w-90 h-120 justify-center bg-white/30 rounded-[20px] ">
        <Search city={city} setCity={setCity} fetchWeather={fetchWeather} />
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <Photo weather={weather} />
        <HuminityWind weather={weather} />
      </div>
    </div>
  );
}
export default App;
