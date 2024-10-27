import styles from './PassengerList.module.css'
import { MdFileDownload } from "react-icons/md";

function PassengerList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section} style={{ marginBottom: '10px' }}>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by email...' />
                    </div>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by mobile...' />
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All App</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Country</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Joining/m</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Status</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Wallet (£)</option>
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
                            <option>All Version</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Trip (£)</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Total Trip (£)</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Trip Type</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Payment Mode</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_count_sec}>
                            <span>0,000,000</span>
                        </div>
                        <span className={styles.overlap_label}>Number of Rider</span>
                    </div>
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>ID & CC <br /> CITY <br /> POSTCODE </th>
                            <th> PASSENGER NAME <br /> EMAIL <br /> ADDRESS </th>
                            <th>MOBILE </th>
                            <th>DATE & TIME : JOINING <br /> LAST SEEN <br /> LAST TRIP </th>
                            <th> APP <br /> VERSION <br /> SORT CODE</th>
                            <th> TRIP COMPLETE <br /> TRIP REQUEST <br /> TRIP CANCELLED</th>
                            <th>LAST TRIP (£) <br /> PAY MODE <br /> XXXXXXXX</th>
                            <th>TRIP (£)/MO <br /> XXXXXXXX <br /> XXXXX </th>
                            <th>TOTAL TRIP (£) <br /> XXXXXXXX <br /> XXXXX </th>
                            <th>WALLET <br /> XXXXXX <br /> ACTION </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td> <div className={styles.name_td}> <span className={styles.name_td_label}> +44XXXXXXXXX </span> <span className={styles.name_td_ball}></span> </div> </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td> <div className={`${styles.name_td} ${styles.red}`}> <span className={styles.name_td_label}> +44XXXXXXXXX </span> <span className={styles.name_td_ball}></span> </div> </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td> <div className={`${styles.name_td} ${styles.green}`}> <span className={styles.name_td_label}> +44XXXXXXXXX </span> <span className={styles.name_td_ball}></span> </div> </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td> <div className={`${styles.name_td} ${styles.black}`}> <span className={styles.name_td_label}> +44XXXXXXXXX </span> <span className={styles.name_td_ball}></span> </div> </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
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
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
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
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
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
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
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
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
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
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PassengerList;