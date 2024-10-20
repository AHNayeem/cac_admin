import { GOOGLE_MAPS_API } from '../../config/config';
import styles from './Dashboard.module.css'
import { AdvancedMarker, APIProvider, Map, Pin, useMap } from '@vis.gl/react-google-maps';

function Dashboard() {
    return (
        <div className={styles.main_container}>
            <APIProvider apiKey={GOOGLE_MAPS_API} libraries={['places']} language={'en'}>
                <Map
                    defaultZoom={14}
                    mapId={'e8b36988ad8e1ba1'}
                    defaultCenter={{ lat: 0, lng: 0 }}
                    style={{ width: '100%', height: '100%', }}
                    streetViewControl={true}
                    mapTypeControl={true}
                    fullscreenControl={true}
                    maxZoom={20}
                    zoomControl={true}
                    clickableIcons={true}
                    draggableCursor={'grab'}
                >
                </Map>
            </APIProvider>
        </div>
    );
}

export default Dashboard;