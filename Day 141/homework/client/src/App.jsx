import { useState } from "react";

export default function MultiFunctionApp() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState(null);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [movie, setMovie] = useState("");
  const [movieInfo, setMovieInfo] = useState(null);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [converted, setConverted] = useState(null);
  const [quote, setQuote] = useState(null);
  const [joke, setJoke] = useState(null);

  const fetchDefinition = async () => {
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await res.json();
    setDefinition(data[0]?.meanings[0]?.definitions[0]?.definition || "Not found");
  };

  const fetchWeather = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`);
    const data = await res.json();
    setWeather(data?.main?.temp ? `${data.main.temp}°C` : "Not found");
  };

  const fetchMovie = async () => {
    const res = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=YOUR_API_KEY`);
    const data = await res.json();
    setMovieInfo(data.Title ? `${data.Title} - ${data.Year}` : "Not found");
  };

  const fetchConversion = async () => {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
    const data = await res.json();
    setConverted(data.rates["EUR"] * amount + " EUR");
  };

  const fetchQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote(data.content);
  };

  const fetchJoke = async () => {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    setJoke(`${data.setup} - ${data.punchline}`);
  };

  return (
    <div className="p-6 space-y-4">
      {[{
        label: "Enter a word",
        value: word,
        setValue: setWord,
        action: fetchDefinition,
        result: definition
      }, {
        label: "Enter city",
        value: city,
        setValue: setCity,
        action: fetchWeather,
        result: weather
      }, {
        label: "Enter movie title",
        value: movie,
        setValue: setMovie,
        action: fetchMovie,
        result: movieInfo
      }, {
        label: "Enter amount",
        value: amount,
        setValue: setAmount,
        action: fetchConversion,
        result: converted,
        additionalInput: {
          label: "Currency (e.g., USD)",
          value: currency,
          setValue: setCurrency
        }
      }].map(({ label, value, setValue, action, result, additionalInput }, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <input
            className="border p-2 rounded w-full"
            placeholder={label}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          {additionalInput && (
            <input
              className="border p-2 rounded w-full mt-2"
              placeholder={additionalInput.label}
              value={additionalInput.value}
              onChange={(e) => additionalInput.setValue(e.target.value)}
            />
          )}
          <button
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={action}
          >
            Submit
          </button>
          <p className="mt-2">{result}</p>
        </div>
      ))}
      <div className="border p-4 rounded-lg shadow-md">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchQuote}>Get Quote</button>
        <p className="mt-2">{quote}</p>
      </div>
      <div className="border p-4 rounded-lg shadow-md">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={fetchJoke}>Get Joke</button>
        <p className="mt-2">{joke}</p>
      </div>
    </div>
  );
}
