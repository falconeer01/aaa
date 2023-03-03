import { createContext, useEffect, useState } from 'react'

// Şehir isimlerinin alındığı dosya:
import cities from "../data/cities_of_turkey.json";

import axios from 'axios';

// Context oluştur.
const WeatherContext = createContext();

// Contextin döndüreceği elementler:
export const WeatherProvider = ({children}) => {
    // Şehir adlarının atandığı state:
    const [cityName, setCityName] = useState(
        cities.find(city => city.name === 'İstanbul')
    );

    // Çekilen hava durumu verisinin tutulduğu state:
    const [weather, setWeather] = useState();

    // Context'teki değerlerin tutulduğu nesne:
    const values = {
        cities,
        cityName,
        setCityName,
        weather,
        setWeather
    };

    // Sayfa mount olduğunda veriyi çek ve weather değişkenine ata.
    useEffect(() => {
        const key = `1f0696b0324b2d975d9648119f2b52e8`;
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.name}&units=metric&appid=${key}`)
            .then(cityName => setWeather(cityName.data));
    }, [cityName]);

    return(
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;