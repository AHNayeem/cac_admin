import styles from './OperatorList.module.css'
import { MdFileDownload } from "react-icons/md";

function OperatorList() {
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
                            <option>All Agent</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Country</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All City</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Plan</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Month</option>
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
                            <option>No. of Driver</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>No. of Trip/m</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Earning/m</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Bill Range</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Bill Status</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_count_sec}>
                            <span>0,000,000</span>
                        </div>
                        <span className={styles.overlap_label}>Number of Annual Trips</span>
                    </div>
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>ID & CC <br /> CITY <br /> POSTCODE </th>
                            <th> OPERATOR NAME <br /> EMAIL <br /> ADDRESS </th>
                            <th>AGENT NAME <br /> CONTACT PERSON <br /> ADDITIONAL TRADE NAMES </th>
                            <th>CURRENT PLAN <br /> MOBILE <br /> LAND PHONE </th>
                            <th>BANK NAME <br /> ACCOUNT NAME <br /> IBAN</th>
                            <th> EARNING/MO <br /> SORTCODE <br /> ACCOUNT NO.</th>
                            <th>TOTAL DRIVER <br /> NEW DRIVER/MO <br /> TRIP/MO</th>
                            <th>LAST BILL <br /> BILL STATUS</th>
                            <th>ACTION <br /> ST. DATE <br /> REVIEW </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
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

export default OperatorList;