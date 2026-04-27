import type { WeatherData } from "../App";

type HuminityWindProps = {
  weather: WeatherData | null;
};
const formatTime12 = (time: string) => {
  const t = time.toString().padStart(4, "0");
  let hours = parseInt(t.slice(0, 2));
  const minutes = t.slice(2, 4);

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
};

function HuminityWind({ weather }: HuminityWindProps) {
  return (
    <div className="flex flex-col text-[#F4F5F0] font-bold w-full">
      {weather?.data.weather.map((e, index) => (
        <div
          className="flex flex-col mt-5 mb-5 bg-[#090461] rounded-[10px] p-5"
          key={index}
        >
          <span
            key={index}
            className="text-[13px] text-[#faeca5] ml-[10px] mb-4 font-bold"
          >
            📅 Date :{e.date}
          </span>
          <div key={index + 2} className="flex w-auto">
            <div
              key={index + 3}
              className="flex ml-[12px] text-nowrap text-[10px] mr-[10px] flex-col"
            >
              <br />
              <li className="mb-[15px] text-purple-400">🌤️ Icons - </li>
              <li className="text-blue-400">⏰ Times - </li>
              <li className="text-orange-400">🌡️ Temperature - </li>
              <li className="text-cyan-400">🌬️ WindSpeed/Miles - </li>
              <li className="text-indigo-400">🧭 Pressure - </li>
              <li className="text-teal-400">💧 Humidity - </li>
              <li className="text-blue-500">🌧️ Chance of rain - </li>
              <li className="text-yellow-400">☀️ Description - </li>
            </div>
            <div
              key={index + 1}
              className="flex text-[10px] w-full overflow-x-auto"
            >
              {e.hourly.map((h, index) => (
                <div
                  key={index}
                  className="flex w-[50px] mr-[15px] flex-shrink-0 h-full flex-col"
                >
                  <div key={0} className="flex justify-center items-center">
                    {h.weatherIconUrl.map((i) => (
                      <img
                        src={i.value}
                        key={1}
                        className="w-[70px] rounded-[10px] h-[46px]"
                      />
                    ))}
                  </div>
                  <div className="flex" key={2}>
                    <span key={3} className="text-blue-400">
                      {formatTime12(h.time)}
                    </span>
                  </div>
                  <div className="flex text-orange-400" key={4}>
                    {h.tempC} °C
                  </div>
                  <div className="flex text-cyan-400" key={5}>
                    {h.windspeedMiles} mph
                  </div>
                  <div className="flex text-indigo-400" key={6}>
                    {h.pressure} hPa
                  </div>
                  <div className="flex text-teal-400" key={8}>
                    {h.humidity} %
                  </div>
                  <div className="flex text-blue-500" key={10}>
                    {h.chanceofrain} %
                  </div>
                  {h.weatherDesc.map((e) => (
                    <div className="flex text-yellow-400" key={11}>
                      {e.value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HuminityWind;
