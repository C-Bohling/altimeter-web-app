import Widget from "../../components/widget";
import { selectLocationData } from "./locationSlice";
import { useSelector } from "react-redux";
import styles from './location.module.css'

const Location = () => {
    const { location, hasPreviouslyLoaded, error } =
        useSelector(selectLocationData);
    console.log('location: ' + JSON.stringify(location))
    console.log('hasPreviouslyLoaded: ' + hasPreviouslyLoaded)
    console.log('error:', error)

    return (
        <Widget loading={!hasPreviouslyLoaded} title='Location'>
            <p className={styles['lat-lng']}>{location.lat}, {location.lng}</p>
        </Widget>
    );
}

export default Location