import type { WeatherData } from "../App";

type HuminityWindProps = {
  weather: WeatherData | null;
};
function HuminityWind({ weather }: HuminityWindProps) {
  return (
    <div className="flex flex-col items-center font-bold justify-center mt-4">
      <div className="text-[#695c24]">Longitude: {weather?.coord.lon}</div>
      <div className="mb-2 text-[#695c24] mt-3">
        Latitude: {weather?.coord.lat}
      </div>
      <div className="text-[#1d6e3a]">
        Description: {weather?.weather[0].description}
      </div>
      <div className="mb-2 mt-3 text-blue-700">
        Huminity: {weather?.main.humidity}%
      </div>
      <div className="text-[#7403ff]">
        Wind Speed: {weather?.wind.speed} Km/h
      </div>
    </div>
  );
}

export default HuminityWind;
