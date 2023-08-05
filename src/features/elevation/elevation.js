import { useSelector } from 'react-redux';
import { selectElevationData } from './elevationSlice';
import Widget from '../../components/widget';
import styles from './elevation.module.css';

const Elevation = () => {
    const { elevation, accuracy, loading, error, errorMsg } =
        useSelector(selectElevationData);
    console.log('elevation: ' + elevation)

    return (
        <Widget loading={loading || (elevation === null)} title='Elevation-o-meter' hasError={error} errorMsg={errorMsg}>
            <p className={styles['focus-number']}>{Math.round(elevation * 3.28084)}</p>
            <p>Feet Above Sea Level</p>
            <p>Accuracy: {accuracy}</p>
        </Widget>
    );
};

export default Elevation;
