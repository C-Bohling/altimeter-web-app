import './App.css';
import Elevation from '../features/elevation/elevation';
import Location from '../features/location/location';
import { startLocationUpdater } from '../features/location/startLocationUpdater';

function App() {
    startLocationUpdater()

    return (
        <div className="App">
            <Elevation />
            <Location />
        </div>
    );
}

export default App;
