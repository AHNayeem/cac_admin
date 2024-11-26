/* eslint-disable react-hooks/exhaustive-deps */
import { IoCloseOutline, IoSearchOutline } from 'react-icons/io5';
import styles from './DriverList.module.css'
import { MdFileDownload } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';

function DriverList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section} style={{ marginBottom: '10px' }}>
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
                            <option>All Agent</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
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
                        <select className={styles.filter_select}>
                            <option>All City</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Plan</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Month</option>
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
                <div className={styles.filter_section}>
                    <div className={styles.filter_item}>
                        <div className={styles.src_holder}>
                            <span className={styles.src_icon}><IoSearchOutline /></span>
                            <input type='text' className={styles.filter_input} placeholder='Search by name...' />
                            <span className={styles.src_clear}><IoCloseOutline /></span>
                        </div>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Operator</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>No. of Trip/m</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Earning/m</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Bill Range</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Bill Status</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                            <option>Option 4</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_count_sec}>
                            <span>0,000,000</span>
                        </div>
                        <span className={styles.overlap_label}>Number of Driver</span>
                    </div>
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>ID & CC <br /> CITY <br /> POSTCODE </th>
                            <th> DRIVER NAME <br /> EMAIL <br /> ADDRESS </th>
                            <th>OPERATOR NAME <br /> AGENT NAME <br /> BANK NAME </th>
                            <th>MOBILE <br /> BANK ACCOUNT NAME <br /> IBAN </th>
                            <th> SERVICE TYPE <br /> VEHICLE REG. <br /> SORT CODE</th>
                            <th> APP <br /> VERSION <br /> BANK AC NO.</th>
                            <th> TRIP/MO <br /> TOTAL TRIP <br /> ACCOUNT NO.</th>
                            <th>EARNING/MO <br /> TOTAL EARNING <br /> XXXXX </th>
                            <th>REQUEST/MO <br /> TOTAL REQUEST <br /> JOINING DATE </th>
                            <th>EXP. DATE <br /> LICENCE <br /> ACTION </th>
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
            <td> XXXXXXX <br /> XXXXXXXXX </td>
            <td> XXXXXXX <br /> XXXXXXXXX </td>
            <td> XXXXXXX <br /> XXXXXXXXX </td>
            <td> XXXXXXX <br /> XXXXXXXXX </td>
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

export default DriverList;