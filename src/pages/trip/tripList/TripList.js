import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';
import styles from './TripList.module.css'
import { IoCarSharp } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { MdFileDownload } from "react-icons/md";

function TripList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section} style={{ marginBottom: '10px' }}>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_week_select}>
                            <option>Current Week [25 Jan - 31 Jan]</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by email...' />
                    </div>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by mobile...' />
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Status</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Operator</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Agent</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Pay Mode</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Pay Status</option>
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
                        <input type='text' className={styles.filter_input} placeholder='Search by name...' />
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All City</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Country</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Car Type</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Vehicle</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_count_sec}>
                            <span>£ 0,000,000</span>
                        </div>
                        <span className={styles.overlap_label}>Weekly Total Fare</span>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_count_sec}>
                            <span>0,000,000</span>
                        </div>
                        <span className={styles.overlap_label}>Weekly Total Trips</span>
                    </div>
                </div>
            </div>

            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>Requested</th>
                            <th>Driver</th>
                            <th>Operator</th>
                            <th>Passenger</th>
                            <th>Fare</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00:00 SUN 15 Mar 2021 [02]</td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td>XXXXXX XXX XXXXX  </td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td style={{color:'blue'}}>$26.<span className={styles.floating_point}>00</span></td>
                            <td> Completed </td>
                        </tr>
                        <tr>
                            <td colSpan={6} style={{ padding: '0px' }}>

                                <div className={styles.trip_details_container}>
                                    <div className={styles.trip_details_left}></div>
                                    <div className={styles.trip_details_mid}>
                                        <div className={styles.info_item}> at 00:00</div>
                                        <div className={styles.info_item}>78 Coombe Rd, New Malden KT3, 4QF, UK</div>
                                        <div className={styles.info_item}>
                                            <span className={styles.info_label}>Passenger </span>
                                            <span className={styles.info_value}>First Name</span>
                                            <span className={styles.info_label_last}>4.15</span>
                                        </div>
                                        <div className={styles.info_item}>
                                            <span className={styles.info_label}>Rate </span>
                                            <span className={styles.info_value} style={{ fontSize: '14px' }}> <MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarOutline /> </span>
                                            <span className={styles.info_label_last}>By Passenger</span>
                                        </div>
                                        <div className={styles.info_item}>
                                            <span className={styles.info_label} style={{ display: 'flex' }}><span style={{ marginRight: '8px' }}> <IoCarSharp style={{ fontSize: '16px', marginRight: '3px' }} /> Ex</span> <span><FaUser style={{ fontSize: '12px', marginRight: '3px' }} /> 4</span></span>
                                            <span className={styles.info_value}>Toyota : Black</span>
                                            <span className={styles.info_label_last}>AB21XYZ</span>
                                        </div>
                                        <div className={styles.info_item}>
                                            <span className={styles.info_label}>Operator</span>
                                            <span className={styles.info_value}>+44(0)20 8088 3435</span>
                                            <span className={styles.info_label_last}>Operator's Name</span>
                                        </div>
                                    </div>
                                    <div className={styles.trip_details_right}>
                                        <div className={styles.driver_payment}><span className={styles.driver_payment_type}>CASH</span> <span className={styles.driver_payment_verify}>Paid</span></div>
                                        <div className={styles.driver_info_section}>
                                            <div className={styles.driver_image}></div>
                                            <div className={styles.driver_info}>
                                                <div className={styles.driver_info_label}>Driver ID: 00000</div>
                                                <div className={styles.driver_info_label}>First Name & Last Name</div>
                                                <div className={styles.driver_info_label}>Rating: 4.68 &nbsp; ID: 0000000</div>
                                            </div>
                                        </div>
                                        <div className={styles.driver_rate_tips}>
                                            <div className={styles.rate_container}>
                                                <div className={styles.rate_label}>Rate by Driver</div>
                                                <div className={styles.rate_value}><MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarOutline /></div>
                                            </div>
                                            <div className={styles.rate_container}>
                                                <div className={styles.rate_label}>Rate by Passenger</div>
                                                <div className={styles.rate_value}><MdStar /><MdStar /><MdStar /><MdStarHalf /><MdStarOutline /></div>
                                            </div>
                                            <div className={styles.tips_container}>
                                                <div className={styles.tips_label}>Tips: </div>
                                                <div className={styles.tips_value}>$ 00.<span className={styles.floating_point}>00</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>00:00 SUN 15 Mar 2021 [02]</td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td>XXXXXX XXX XXXXX  </td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td style={{color:'blue'}}>$26.<span className={styles.floating_point}>00</span></td>
                            <td> Completed </td>
                        </tr>
                        <tr>
                            <td>00:00 SUN 15 Mar 2021 [02]</td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td>XXXXXX XXX XXXXX  </td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td style={{color:'blue'}}>$26.<span className={styles.floating_point}>00</span></td>
                            <td> Completed </td>
                        </tr>
                        <tr>
                            <td>00:00 SUN 15 Mar 2021 [02]</td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td>XXXXXX XXX XXXXX  </td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td style={{color:'blue'}}>$26.<span className={styles.floating_point}>00</span></td>
                            <td> Completed </td>
                        </tr>
                        <tr>
                            <td>00:00 SUN 15 Mar 2021 [02]</td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td>XXXXXX XXX XXXXX  </td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td style={{color:'blue'}}>$26.<span className={styles.floating_point}>00</span></td>
                            <td> Completed </td>
                        </tr>
                        <tr>
                            <td>00:00 SUN 15 Mar 2021 [02]</td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td>XXXXXX XXX XXXXX  </td>
                            <td>First Name Last Name <br /> [+447777777] </td>
                            <td style={{color:'blue'}}>$26.<span className={styles.floating_point}>00</span></td>
                            <td> Completed </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TripList;