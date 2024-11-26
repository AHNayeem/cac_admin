/* eslint-disable react-hooks/exhaustive-deps */
import { MdFileDownload } from 'react-icons/md';
import styles from './SubAdminList.module.css'
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';
function VehicleList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={styles.filter_item}>
                        <div className={styles.src_holder}>
                            <span className={styles.src_icon}><IoSearchOutline /></span>
                            <input type='text' className={styles.filter_input} placeholder='Search by name...' />
                            <span className={styles.src_clear}><IoCloseOutline /></span>
                        </div>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.src_holder}>
                            <span className={styles.src_icon}><IoSearchOutline /></span>
                            <input type='text' className={styles.filter_input} placeholder='Search by email...' />
                            <span className={styles.src_clear}><IoCloseOutline /></span>
                        </div>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.src_holder}>
                            <span className={styles.src_icon}><IoSearchOutline /></span>
                            <input type='text' className={styles.filter_input} placeholder='Search by mobile...' />
                            <span className={styles.src_clear}><IoCloseOutline /></span>
                        </div>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Country</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_double}>
                            <div className={styles.double_pagi_count}>
                                <select>
                                    <option>20</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                            </div>
                            <div className={styles.double_download}>
                                <MdFileDownload />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>FIRST NAME <br /> LAST NAME</th>
                            <th>ID <br /> EMAIL</th>
                            <th>COUNTRY <br /> MOBILE</th>
                            <th>ADDRESS <br /> POSTCODE </th>
                            <th>DATE <br /> ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ListOfItem />
                    </tbody>
                </table>
            </div>
        </div>
    );
}


const ListOfItem = () => {
    const [showActionMenu, setShowActionMenu] = useState(false);
    const handleActionClick = () => {
        setShowActionMenu(prev => !prev)
    }
    const popupRef = useRef(null);  // Ref for the popup container

    // Outside click handler
    const handleOutsideClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            handleActionClick();  // Close the popup if the click is outside
        }
    };

    // Add event listener on mount and clean up on unmount
    useEffect(() => {
        if (showActionMenu) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        // Clean up listener when the component is unmounted
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [showActionMenu]);

    return (
        <tr>
            <td>XXX XXXXXX</td>
            <td>+44XXXXXXXXX </td>
            <td>xxxx@xxxx.xxx</td>
            <td> XXXXXXX <br /> XXXXXXXXX </td>
            <td>
                <div className={styles.action_section}>
                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                    {showActionMenu &&
                        <div className={styles.action_popup} ref={popupRef}>
                            <div className={styles.action_item}>Edit Details</div>
                            <div className={styles.action_item}>Profile : View</div>
                            <div className={styles.action_item}>Operator : View</div>
                            <div className={styles.action_item}>Referral : View</div>
                            <div className={styles.action_item}>Commission : View</div>
                            <div className={styles.action_item}>URLs Setting</div>
                            <div className={styles.action_item}>Generate Commission</div>
                            <div className={styles.action_item}>Accept / Decline</div>
                        </div>
                    }
                </div>
            </td>
        </tr>
    )
}


export default VehicleList;