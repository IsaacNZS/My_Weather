type SearchProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  fetchWeather: (searchCity: string) => void;
};

function Search({ city, setCity, fetchWeather }: SearchProps) {
  return (
    <div>
      <input
        type="text"
        value={city}
        placeholder="Enter city name..."
        className="border-2 pl-2 text-[#421278] rounded-full focus:outline-none focus:border-[#1100ff]  h-10 m-2"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fetchWeather(city);
          }
        }}
      />
      <button
        onClick={() => fetchWeather(city)}
        className="border-2 text-[#5f03ff] mr-[5px] rounded-full font-bold h-10 px-2"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
