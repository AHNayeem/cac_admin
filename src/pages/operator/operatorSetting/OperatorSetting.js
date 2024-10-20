import { IoChevronDown } from 'react-icons/io5';
import styles from './OperatorSetting.module.css'
import { useState } from 'react';

function OperatorSetting() {
    const [collapse, setCollapse] = useState('')

    const handleCollapse = (type) => {
        setCollapse(prev => prev === type ? '' : type)
    }
    return (
        <div className={styles.page_container}>
            <div className={styles.inner_container}>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head} onClick={() => handleCollapse('map_view')} style={collapse === 'map_view' ? {backgroundColor:'#00ffff'} : {}}>
                        <div className={styles.setting_head_left}>Operator : Map View</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} MAP VIEW Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {collapse === 'map_view' && <div className={styles.setting_body}>
                        <div className={styles.body_content_section}>
                            <div className={styles.body_item}>
                                <div className={styles.item_label}>Button : Add Operator</div>
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
                                <div className={styles.item_label}>Button : Operator</div>
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
                        <div className={styles.setting_head_left}>Operator : Profile</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} PROFILE Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Trip Request</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} TRIP QEQUEST Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Driver</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} DRIVER Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Vehicle</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} VEHICLE Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Trip History</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} TRIP HISTORY Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Billing</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} BILLING Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Update Request</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} UPDATE REQUEST Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
                <div className={styles.setting_container}>
                    <div className={styles.setting_head}>
                        <div className={styles.setting_head_left}>Operator : Setting</div>
                        <div className={styles.setting_head_mid}>Manage Content and Views on OPERATOR {`->`} SETTING Page </div>
                        <div className={styles.setting_head_right}> <IoChevronDown /></div>
                    </div>
                    {/* <div className={styles.setting_body}>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default OperatorSetting;