import styles from './StatementPreview.module.css'

function StatementPreviw() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>ID & CC</th>
                            <th>OPERATOR NAME</th>
                            <th>C. PLAN [1]</th>
                            <th>TRIP/M [2] </th>
                            <th>N. DR/M [3]</th>
                            <th>TOTAL DRIVER</th>
                            <th>EARNING/M [4]</th>
                            <th>LAST BILL & ST.</th>
                            <th><span className={styles.table_head_span}>00.<span className={styles.floating_point}>00</span></span>*[1]</th>
                            <th><span className={styles.table_head_span}>00.<span className={styles.floating_point}>00</span></span>*[2]</th>
                            <th><span className={styles.table_head_span}>00.<span className={styles.floating_point}>00</span></span>*[3]</th>
                            <th><span className={styles.table_head_span}>0.<span className={styles.floating_point}>00</span></span>*[4]</th>
                            <th>ADJUST [5]</th>
                            <th>[1]+[2]+[3]+[4]+[5]</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'red' }}>UNPAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'red' }}>-0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'red' }}>UNPAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'red' }}>-0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                        <tr>
                            <td>00000 UK</td>
                            <td>XXXXX 27 characters </td>
                            <td>FREE[0]</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000</td>
                            <td>0,000,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>PAID</td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>0,000.<span className={styles.floating_point}>00</span></td>
                            <td style={{ color: 'blue' }}>0,000.<span className={styles.floating_point}>00</span></td>
                            <td>00,000.<span className={styles.floating_point}>00</span></td>
                            <td>Action</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StatementPreviw;