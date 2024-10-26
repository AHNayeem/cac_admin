
import { useState } from 'react';
import styles from './RequestDriver.module.css'
import structure from '../structure.module.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { IoIosArrowDown } from 'react-icons/io';
function RequestDriver() {
    const [collapse, setCollapse] = useState(true)
    const [isOpen, setIsOpen] = useState(false);
    const [left_menu, set_left_menu] = useState('');
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={styles.page_container}>
            <div className={structure.container}>
                <div className={structure.container_section} style={collapse ? { width: '4%' } : { width: '25%' }}>
                    <div className={structure.left_inner_container}>
                        <div className={`${structure.left_collapse_bar} ${collapse && structure.collapsed}`}>
                            <div className={`${structure.collapse_area}`} onClick={() => setCollapse(prev => !prev)}>
                                <span className={structure.colapse_text}>Update Request</span>
                                <span className={structure.colapse_icon} style={!collapse ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' }}><IoIosArrowDown /></span>
                            </div>
                        </div>
                        {!collapse &&
                            <div className={structure.left_inner}>
                                <div className={styles.left_menu_container}>
                                    <div className={styles.left_menu_item_container}>
                                        <div className={styles.left_menu_item_head} onClick={() => set_left_menu(prev => prev === 'profile' ? '' : 'profile')}>
                                            <span className={styles.head_icon}>{left_menu === 'profile' ? <IoChevronUp /> : <IoChevronDown />}</span>
                                            <span className={styles.head_label}>Profile</span>
                                        </div>
                                        {left_menu === 'profile' && <div className={styles.left_menu_item_inner}>
                                            <div className={`${styles.left_menu_item_inner_item} ${styles.active}`}>Current Requests</div>
                                            <div className={styles.left_menu_item_inner_item}>Accepted</div>
                                            <div className={styles.left_menu_item_inner_item}>Declined</div>
                                        </div>}
                                    </div>
                                    <div className={styles.left_menu_item_container}>
                                        <div className={styles.left_menu_item_head} onClick={() => set_left_menu(prev => prev === 'vehicle' ? '' : 'vehicle')}>
                                            <span className={styles.head_icon}>{left_menu === 'vehicle' ? <IoChevronUp /> : <IoChevronDown />}</span>
                                            <span className={styles.head_label}>Vehicle</span>
                                        </div>
                                        {left_menu === 'vehicle' && <div className={styles.left_menu_item_inner}>
                                            <div className={`${styles.left_menu_item_inner_item}`}>Current Requests</div>
                                            <div className={styles.left_menu_item_inner_item}>Accepted</div>
                                            <div className={styles.left_menu_item_inner_item}>Declined</div>
                                        </div>}
                                    </div>
                                    <div className={styles.left_menu_item_container}>
                                        <div className={styles.left_menu_item_head} onClick={() => set_left_menu(prev => prev === 'document' ? '' : 'document')}>
                                            <span className={styles.head_icon}>{left_menu === 'document' ? <IoChevronUp /> : <IoChevronDown />}</span>
                                            <span className={styles.head_label}>Document</span>
                                        </div>
                                        {left_menu === 'document' && <div className={styles.left_menu_item_inner}>
                                            <div className={styles.left_menu_item_inner_item}>Current Requests</div>
                                            <div className={styles.left_menu_item_inner_item}>Accepted</div>
                                            <div className={styles.left_menu_item_inner_item}>Declined</div>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
                <div className={structure.container_section} style={collapse ? { width: '96%' } : { width: '75%' }}>
                    <div className={structure.right_inner_container}>
                        <div className={structure.right_inner}>
                            <div className={styles.content_section}>
                                <div className={`${styles.custom_container} ${isOpen ? `${styles.active}` : ''}`}>
                                    {/* Header with collapsible sections */}
                                    <div className={`${styles.header}`} onClick={toggleOpen}>
                                        <div className={styles.header_info}>
                                            <span>FirstName & LastName [ +447777777777 ]</span>
                                            <span>11:05 AM | 03 June 2021</span>
                                        </div>
                                        <span className={styles.dropdown_icon}>{isOpen ? <IoChevronDown /> : <IoChevronUp />}</span>
                                    </div>

                                    {/* Collapsible content */}
                                    {isOpen && (
                                        <div className={styles.content}>
                                            <div className={styles.data_section}>
                                                <table className={` ${styles.data_table} ${styles.totals}`}>
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '12%' }}></th>
                                                            <th style={{ width: '40%' }}>EXISTING</th>
                                                            <th style={{ width: '40%' }}>NEW</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{ textAlign: 'right' }}>PCO Licence</td>
                                                            <td style={{ textAlign: 'left' }}>Actual Data From Database</td>
                                                            <td>
                                                                <div className={styles.data_row}>
                                                                    <input type="text" placeholder="XXXXXXXX XXXXXX XXXXX" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: 'right' }}>Licensing Authority</td>
                                                            <td style={{ textAlign: 'left' }}>Actual Data From Database</td>
                                                            <td>
                                                                <div className={styles.data_row}>
                                                                    <input type="text" placeholder="XXXXXXXX XXXXXX XXXXX" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ textAlign: 'right' }}>Service Type</td>
                                                            <td style={{ textAlign: 'left' }}>Actual Data From Database</td>
                                                            <td>
                                                                <div className={styles.data_row}>
                                                                    <input type="text" placeholder="XXXXXXXX XXXXXX XXXXX" />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td><div className={styles.image_section}>
                                                                <div className={styles.image_box}>
                                                                    <div>PCO/ Licence</div>
                                                                </div>
                                                                <div className={styles.image_box}>
                                                                    <div>Profile Image</div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                            <td><div className={styles.image_section}>
                                                                <div className={styles.image_box}>
                                                                    <div>PCO/ Licence</div>
                                                                </div>
                                                                <div className={styles.image_box}>
                                                                    <div>Profile Image</div>
                                                                </div>
                                                            </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            {/* Action buttons */}
                                            <div className={styles.action_buttons}>
                                                <button className={styles.decline_btn}>DECLINE</button>
                                                <button className={styles.accept_btn}>ACCEPT</button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );

}

export default RequestDriver;