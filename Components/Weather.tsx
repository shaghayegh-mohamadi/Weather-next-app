import React from 'react'
import { WeatherData } from '@/app/types/WeatherData'; 
import Image from 'next/image';
import WeatherIcon from '@/Components/WeatherIcon'

interface WeatherProps {
  data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({data}) => {
  console.log(data)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[80vh] m-auto p-6 text-slate-200 z-10 '>
      {/* */}

     <div className='relative flex justify-between pt-12 '>
      <div className='flex flex-col items-center '>
        <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt="/"
        width={130}
        height={130}
        />
        <p className='text-2xl'>{data.weather[0].main}</p>
      </div>
      <p className='text-9xl pt-4'>{data.main.temp.toFixed(0)}&#176;</p>
     </div>
      {/* bottom */}
      
      <div className='flex-1'>
        <WeatherIcon data={data} />
    
      </div>
    
      
    </div>
  )
}

export default Weather
