import type { WeatherData } from "../App";

type WeatherCardProps = {
  weather: WeatherData | null;
};
function Photo({ weather }: WeatherCardProps) {
  return (
    <div>
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt="Weather"
        className="w-30 h-30"
      />
      <p className="text-[35px]">{weather?.main.temp}°C</p>
      <p className="text-[25px]">{weather?.name}</p>
    </div>
  );
}

export default Photo;
