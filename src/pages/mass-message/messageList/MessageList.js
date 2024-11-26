/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import styles from './MessageList.module.css'
import { MdFileDownload } from "react-icons/md";

function MessageList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Plate</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Make</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Year</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Type</option>
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
                <div className={styles.list_count_section}>
                    {/* <div className={styles.count_text}>Registered Agents</div>
                    <div className={styles.count_number}>0,000,000</div> */}
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th> Recipients</th>
                            <th>Message</th>
                            <th>Scheduled/Time Sent</th>
                            <th>Date Sent </th>
                            <th>Actions</th>
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
            <td>Economy</td>
            <td>Affordable rides </td>
            <td>$3</td>
            <td>Sedan</td>
            <td>
                <div className={styles.action_section}>
                    <span className={styles.action_label} onClick={handleActionClick}>Action</span>
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

export default MessageList;