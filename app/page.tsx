"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import image from "@/public/image.jpg";
import { BsSearch } from "react-icons/bs";
import Weather from "@/Components/Weather";
import { WeatherData } from "./types/WeatherData";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=90e14f5ca613fbae4c2f2ce32a09146b`;

  const fetchWeather = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        setLoading(false);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
        setError(error.message);
      });
    setCity("");
  };

  return (
    <main>
      <div className="absolut top-0 left-0 right-0 bottom-0 ">
        <Image
          alt="bg background"
          src={image}
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="overflow-y-hidden ">
        {/* search */}
        <div className="relative flex justify-between items-center max-w-[500px]  w-full  m-auto pt-10 text-white z-10">
          <form
            onSubmit={fetchWeather}
            className="flex justify-between m-auto items-center w-full  p-3  border border-gray-300 rounded-2xl"
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                placeholder="Seatch city"
                type="text"
                className="bg-transparent border-none focus:outline-none text-white placeholder-white"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
        {loading ? (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex  justify-center items-center">
            <span className="text-white font-bold text-2xl animate-bounce">
              Loading...
            </span>
          </div>
        ) : error ? (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <span className="text-red-400/80  text-2xl">Error: {error}</span>
          </div>
        ) : (
          weather && <Weather data={weather} />
        )}
      </div>
    </main>
  );
}
