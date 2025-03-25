import { useEffect, useState } from "react";

export default function App() {

  const [cityName, setCityName] = useState("Tbilisi");
  const [apiData, setApiData] = useState({});


  const API_KEY = "a9e2812f64de4316c83ee7129fde2e04";


  const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

  useEffect(() => {
    const callApi = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const result = await response.json();
        setApiData(result);
      } catch (error) {
        console.log("Error fetching data", error);
        setApiData({ name: "shio ox ox", main: { temp: 123 } });
      }
    };
    callApi();
  }, [apiEndpoint]);

  console.log(apiData);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white font-sans">
      <div className="w-[320px] bg-white rounded-2xl p-6 shadow-2xl text-black">
        <h1 className="text-2xl font-bold mb-4 text-center">🌤 WEATHER APP 🌤</h1>
        
        <div className="bg-gray-100 p-4 rounded-xl mb-4">
          <span className="block text-lg font-semibold">City Name:</span>
          <span className="text-xl">{apiData.name}</span>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <span className="block text-lg font-semibold">Temperature:</span>
          <span className="text-xl">{apiData.main?.temp} °C</span>
        </div>
      </div>
    </div>
  );
}
