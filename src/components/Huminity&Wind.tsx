import type { WeatherData } from "../App";

type HuminityWindProps = {
  weather: WeatherData | null;
};
function HuminityWind({ weather }: HuminityWindProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="mb-2 mt-3">Huminity: {weather?.main.humidity}%</div>
      <div>Wind Speed: {weather?.wind.speed} Km/h</div>
    </div>
  );
}

export default HuminityWind;
