import CityItem from './CityItem';
import style from './CountryList.module.css';
import Spinner from './Spinner';
import Message from './Message'
import CountryItem from './CountryItem';
import { useCities } from '../contexts/CitiesContext';

const CountryList = () => {

    const { cities, isLoading } = useCities()

    if (isLoading) return <Spinner />;

    if (!cities.length) return <Message message='Add your first city by clicking on a city on the map' />

    const coutries = cities.reduce((arr, city) => {
        if (!arr.map(el => el.coutry).includes(city.coutry))
            return [...arr, { coutry: city.coutry, emoji: city.emoji }]; else return arr;
    }
        , [])

    return (
        <ul className={style.countryList}>
            {
                coutries.map((coutry) => (
                    <CountryItem country={coutry} key={coutry.country} />
                ))
            }
        </ul>
    )
}

export default CountryList