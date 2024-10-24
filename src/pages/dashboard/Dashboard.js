// import { GOOGLE_MAPS_API } from '../../config/config';
import { TfiClose } from 'react-icons/tfi';
import styles from './Dashboard.module.css'
import { RiSearch2Line } from 'react-icons/ri';
// import { AdvancedMarker, APIProvider, Map, Pin, useMap } from '@vis.gl/react-google-maps';

function Dashboard() {
    return (
        <div className={styles.main_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={styles.filter_part}>
                        <div className={styles.search_section}>
                            <span className={styles.search_icon}><RiSearch2Line /></span>
                            <input placeholder='Search destination...'/>
                            <span className={styles.search_icon}><TfiClose /></span>
                        </div>
                    </div>
                    <div className={styles.filter_part}>
                        <div className={styles.filter_item}>
                            <select className={styles.filter_select}>
                                <option>All Country</option>
                            </select>
                        </div>
                        <div className={styles.filter_item}>
                            <select className={styles.filter_select}>
                                <option>All City</option>
                            </select>
                        </div>
                        <div className={styles.filter_item}>
                            <select className={styles.filter_select}>
                                <option>Service Type</option>
                            </select>
                        </div>
                        <div className={styles.filter_item}>
                            <select className={styles.filter_select}>
                                <option>Operator</option>
                            </select>
                        </div>
                        <div className={styles.filter_item}>
                            <select className={styles.filter_select}>
                                <option>Driver</option>
                            </select>
                        </div>
                        <div className={styles.filter_item}>
                            <select className={styles.filter_select}>
                                <option>Status</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.list_count_section}>
                    {/* <div className={styles.count_text}>Registered Agents</div>
                    <div className={styles.count_number}>0,000,000</div> */}
                </div>
            </div>
            {/* <APIProvider apiKey={GOOGLE_MAPS_API} libraries={['places']} language={'en'}>
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
            </APIProvider> */}
        </div>
    );
}

export default Dashboard;