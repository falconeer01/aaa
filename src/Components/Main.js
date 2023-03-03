import {useContext, useEffect} from 'react'
import WeatherContext from '../Context/WeatherContext';

function Main() {
  const {weather} = useContext(WeatherContext);

  useEffect(() => {
    const cards = document.querySelector('.card');
    if(!cards){
        console.log("This element doesn't exist.");
    }
    else cards.classList.add('today');
  }, [weather]);

  if(!weather){
    return(
        <div>
            <p>Loading...</p>
        </div>
    )
  }

  return (
    <div className='row mt-5'>
        {
            weather.list.slice(0, 7).map((info, key) => {
                return <div className='col' key={key}>
                            <div className="card my-1" style={{width: "7rem"}} key={key}>
                                <div className="card-body" key={key}>
                                    <h5 className='card-title date-info'>
                                        {new Date(info.dt * 1000).toString().split(' ')[0]}
                                    </h5>
                                    <img src={`http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`} className="card-img-top" alt="weather-icon"/>
                                    <div className='temp-info d-flex justify-content-between'>
                                        <span className='max-deg'>{`${info.main.temp_max.toFixed(0)}°C`}</span>
                                        <span className='min-deg'>{`${info.main.temp_min.toFixed(0)}°C`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
            })
        }
        {
            weather.list.map(info => console.log(info.dt_txt))
        }
    </div>
  )
}

export default Main;