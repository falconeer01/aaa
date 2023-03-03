import {useContext} from 'react'
import WeatherContext from '../Context/WeatherContext';

function Header() {
  const {cities, cityName, setCityName} = useContext(WeatherContext);

  function changeCity(e){
    cities.filter(city => {
        if(city.name === e.target.value){
            setCityName(city);
        }
        return city;
    })
  }

  return (
    <div className='header mt-5'>
        <select
            className='dropdown btn dropdown-toggle'
            value={cityName.name}
            onChange={changeCity}
            style={{backgroundColor: "rgba(13, 202, 240, 0.5)"}}
        >
            {
                cities.map(city => {
                    return <option key={city.id}>{city.name}</option>
                })
            }
        </select>
    </div>
  )
}

export default Header;