import { MdFileDownload } from 'react-icons/md';
import styles from './SubAdminList.module.css'
function VehicleList() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by name...' />
                    </div>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by email...' />
                    </div>
                    <div className={styles.filter_item}>
                        <input type='text' className={styles.filter_input} placeholder='Search by mobile...' />
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Country</option>
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
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
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

export default VehicleList;