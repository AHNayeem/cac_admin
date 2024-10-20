import { useState } from 'react';
import styles from './DriverSetting.module.css'
import { IoChevronDown } from 'react-icons/io5';

function DriverSetting() {
    const [collapse, setCollapse] = useState('')

    const handleCollapse = (type) => {
        setCollapse(prev => prev === type ? '' : type)
    }
    return (
        <div className={styles.page_container}>
            <div className={styles.inner_container}>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head} onClick={() => handleCollapse('map_view')} style={collapse === 'map_view' ? { backgroundColor: '#00ffff' } : {}}>
                        <div className={styles.setting_head_left}>Driver : Map View</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} MAP VIEW Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {collapse === 'map_view' && <div className={styles.setting_body}>
                        <div className={styles.body_content_section}>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Add Driver</div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Agent Name</div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Commission </div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}> Field : Search destination </div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Map View</div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Refferal </div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Image : Profile Picture</div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Driver</div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Setting</div>
                                <div className={styles.item_check}><input type='checkbox' /></div>
                            </div>
                        </div>
                        <div className={styles.body_button_section}>
                            <div className={styles.button_group}>
                                <select className={styles.select_button}>
                                    <option>Select User</option>
                                </select>
                                <button className={styles.update_button}>Update</button>
                            </div>
                        </div>
                    </div>
                    }
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Profile</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} PROFILE Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Trip & Earning</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} TRIP & EARNING Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Wallet</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} WALLET Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Vehicle</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} VEHICLE Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Document</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} DOCUMENT Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Referral</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} REFERRAL Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Driver : Setting</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on DRIVER {`->`} SETTING Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default DriverSetting;