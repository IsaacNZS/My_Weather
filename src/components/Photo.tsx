import type { search } from "../App";

type WeatherCardProps = {
  weather: search | null;
};
function Photo({ weather }: WeatherCardProps) {
  return (
    <div className="w-full">
      <p className="text-[30px] text-[#00d9ff] font-bold text-center">
        "{weather?.name}" <br />
      </p>
    </div>
  );
}

export default Photo;
