import { useState } from 'react';
import styles from './RequestAgent.module.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

function RequestAgent() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the expand/collapse state
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={styles.page_container}>
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
    );
}

export default RequestAgent;