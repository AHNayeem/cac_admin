import styles from './vehicleList.module.css'
import { MdFileDownload } from "react-icons/md";

function VehicleList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Plate</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Make</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Year</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Type</option>
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
                    <div className={styles.count_text}>Registered Vehicle</div>
                    <div className={styles.count_number}>0,000,000</div>
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>Plate No</th>
                            <th>Make <br /> Model</th>
                            <th>Color  <br />Year</th>
                            <th>Service Type <br /> Accessibility </th>
                            <th>Driver Name <br /> Mobile Number</th>
                            <th>Operator Name <br /> Mobile Number</th>
                            <th>Date <br /> Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
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

export default VehicleList;