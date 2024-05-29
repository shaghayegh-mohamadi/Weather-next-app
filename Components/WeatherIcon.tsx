import React from 'react';
import { MdAir } from 'react-icons/md';
import { FiDroplet } from 'react-icons/fi';
import { ImMeter } from 'react-icons/im';
import { LuSunrise, LuSunset } from 'react-icons/lu';
import { format } from 'date-fns';
import { IoMdThermometer } from 'react-icons/io';
import { WeatherData } from '@/app/types/WeatherData';

interface WeatherIconProps {
    data: WeatherData;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ data }) => {
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunriseFormatted = format(sunriseTime, 'HH:mm');
    const sunsetTime = new Date(data.sys.sunset * 1000);
    const sunsetFormatted = format(sunsetTime, 'HH:mm');

    return (
        <div className='relative flex flex-col items-center mt-6'>
            <p className='text-2xl text-center mb-6 mt-10'>Weather in {data.name} :</p>
            <div className='grid justify-between text-center items-center bg-black/30 py-3 px-5 md:w-[650px] gap-5 rounded-md md:grid-cols-6 xs:grid-cols-3 xs:w-[350px]'>
                <div className='flex flex-col items-center '>
                    <p>Feels Like</p>
                    <p className='p-2'><IoMdThermometer size={24} /></p>
                    <p>{data.main.feels_like}&#176;</p>
                </div>
                <div className='flex flex-col items-center '>
                    <p>Humidity</p>
                    <p className='p-2'><FiDroplet size={24} /></p>
                    <p>{data.main.humidity}%</p>
                </div>
                <div className='flex flex-col items-center '>
                    <p>Wind</p>
                    <p className='p-2'><MdAir size={24} /></p>
                    <p>{data.wind.speed.toFixed(0)} MPH</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p>Pressure</p>
                    <p className='p-2 '><ImMeter size={24} /></p>
                    <p>{data.main.pressure.toFixed(0)} hPa</p>
                </div>
                <div className='flex flex-col items-center '>
                    <p>Sunrise</p>
                    <p className='p-2'><LuSunrise size={24} /></p>
                    <p>{sunriseFormatted}</p>
                </div>
                <div className='flex flex-col items-center '>
                    <p>Sunset</p>
                    <p className='p-2 '><LuSunset size={24} /></p>
                    <p>{sunsetFormatted}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherIcon;
