import styles from './DispatcherList.module.css'
import { MdFileDownload } from "react-icons/md";

function DispatcherList() {
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
                    {/* <div className={styles.count_text}>Registered Agents</div>
                    <div className={styles.count_number}>0,000,000</div> */}
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>Driver</th>
                            <th>Passenger</th>
                            <th>Destination</th>
                            <th>Status </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Economy</td>
                            <td>Affordable rides </td>
                            <td>$3</td>
                            <td>Sedan</td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Premium</td>
                            <td>Luxury experience </td>
                            <td>$5</td>
                            <td>Luxury Sedan</td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.action_label}>Action</span>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DispatcherList;