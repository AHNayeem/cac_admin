import { useState } from 'react';
import styles from './AgentSetting.module.css'
import { IoChevronDown } from "react-icons/io5";

function AgentSetting() {

    const [collapse, setCollapse] = useState('')

    const handleCollapse = (type) => {
        setCollapse(prev => prev === type ? '' : type)
    }
    return (
        <div className={styles.page_container}>
            <div className={styles.inner_container}>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head} onClick={() => handleCollapse('map_view')} style={collapse === 'map_view' ? {backgroundColor:'#00ffff'} : {}}>
                        <div className={styles.setting_head_left}>Agent : Map View</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} MAP VIEW Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {collapse === 'map_view' && <div className={styles.setting_body}>
                        <div className={styles.body_content_section}>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Add Agent</div>
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
                                <div className={styles.item_label}>Button : Agent</div>
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
                        <div className={styles.setting_head_left}>Agent : Profile</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} PROFILE Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Trip Request</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} TRIP QEQUEST Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Driver</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} DRIVER Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Vehicle</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} VEHICLE Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Trip History</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} TRIP HISTORY Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Billing</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} BILLING Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Update Request</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} UPDATE REQUEST Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Agent : Setting</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on AGENT {`->`} SETTING Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default AgentSetting;