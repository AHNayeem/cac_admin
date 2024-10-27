import { MdFileDownload } from 'react-icons/md';
import styles from './BillPreview.module.css'
import { IoChevronDownOutline } from 'react-icons/io5';

function BillPreview() {
    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={`${styles.filter_item} ${styles.statement_section}`}>
                        <div className={styles.statement_select}>
                            <div>
                                Statement Preview
                            </div>
                            <div>
                                Agent's Name [ID] : January 2021
                            </div>
                            <div>
                                <IoChevronDownOutline />
                            </div>
                        </div>
                    </div>
                    <div className={styles.filter_item}>
                        <button className={styles.filter_submit}>SUBMIT</button>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>Select Agent</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>January 2021</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.double_download}>
                            <MdFileDownload />
                        </div>
                    </div>
                </div>
                <div className={styles.filter_section} style={{ paddingTop: '25px', borderBottom: '1px solid #000' }}>
                    {/* <div className={styles.filter_item}>
                        <div className={styles.filter_count_sec}>
                            <span>0,000,000</span>
                        </div>
                        <span className={styles.overlap_label}>Total Commission</span>
                    </div> */}
                    <div className={styles.filter_double}>
                        <div className={styles.filter_item}>
                            <div className={styles.filter_count_sec}>
                                <span>£ 0,000,000.<span className={styles.floating_point}>00</span></span>
                            </div>
                            <span className={styles.overlap_label}>Total Commission</span>
                        </div>
                        <div className={styles.filter_item}>
                            <div className={styles.filter_count_sec} style={{ backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}>
                                <span>UPDATE</span>
                            </div>
                            <span className={styles.overlap_label}>Statement</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.body_section}>
                <div className={styles.section_left}>
                    <div className={styles.invoice_container}>
                        <div className={styles.invoice_top}>

                            <div className={styles.invoice_header}>
                                <div className={styles.operator_info}>
                                    <p><strong>Operator Name (ID)</strong></p>
                                    <p>Agent's current address</p>
                                    <p>+44(0)7777777777</p>
                                    <p>Email: agent-email@address.com</p>

                                    <div className={styles.note}>
                                        <p>NOTE: Admin will set this text or note from Admin {`->`} Agent {`->`} Agent-Action {`->`} Generate-Statement. Maximum width of the text box: 250px and right-alignment</p>
                                    </div>
                                </div>
                                <div className={styles.invoice_details}>
                                    <p style={{ padding: '0 10px' }}>INVOICE: 31 January 2021</p>
                                    <h2>£ 0,000,000.<span className={styles.float_point}>00</span></h2>
                                    <div className={styles.pay_type}>
                                        <div className={styles.pay_due}>DUE</div>
                                        <div className={styles.pay_now}>PAY NOW</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.table_container}>
                            <table className={styles.invoice_table}>
                                <thead>
                                    <tr style={{ borderBottom: '4px solid #000' }}>
                                        <th style={{ width: '60%', textAlign: 'left' }}>DESCRIPTION</th>
                                        <th style={{ width: '12%' }}>QUANTITY</th>
                                        <th style={{ width: '12%' }}>RATE/UNIT</th>
                                        <th style={{ width: '16%' }}>AMOUNT DUE</th>
                                    </tr>
                                </thead>
                                <tbody className={styles.table_body}>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>Description will start from here</td>
                                        <td>0,000</td>
                                        <td>0,000</td>
                                        <td>00,000.<span className={styles.floating_point}>00</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>Description will start from here</td>
                                        <td>0,000</td>
                                        <td>0,000</td>
                                        <td>00,000.<span className={styles.floating_point}>00</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>Description will start from here</td>
                                        <td>0,000</td>
                                        <td>0,000</td>
                                        <td>00,000.<span className={styles.floating_point}>00</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>Description will start from here</td>
                                        <td>0,000</td>
                                        <td>0,000</td>
                                        <td>00,000.<span className={styles.floating_point}>00</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>Description will start from here</td>
                                        <td>0,000</td>
                                        <td>0,000</td>
                                        <td>00,000.<span className={styles.floating_point}>00</span></td>
                                    </tr>
                                    <tr>
                                        <td style={{ textAlign: 'left' }}>Description will start from here</td>
                                        <td>0,000</td>
                                        <td>0,000</td>
                                        <td>00,000.<span className={styles.floating_point}>00</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.bottom_table}>
                            <div className={styles.bottom_table_left}>
                                <div className={styles.note} style={{ margin: '0px', width: '100%' }}>
                                    <p>NOTE: Admin will set this text or note from Admin {`->`} Agent {`->`} Agent-Action {`->`} Generate-Statement. Maximum width of the text box: 250px and right-alignment</p>
                                </div>
                            </div>
                            <div className={styles.bottom_table_right}>
                                <table className={` ${styles.invoice_table} ${styles.totals}`}>
                                    <tbody className={styles.total_table_body} >
                                        <tr>
                                            <td style={{ width: '60%', textAlign: 'right' }}>SUB-TOTAL:</td>
                                            <td style={{ width: '40%' }}>00,000.<span className={styles.floating_point}>00</span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '60%', textAlign: 'right' }}>VAT:</td>
                                            <td style={{ width: '40%' }}>00,000.<span className={styles.floating_point}>00</span></td>
                                        </tr>
                                        <tr>
                                            <td style={{ width: '60%', textAlign: 'right' }}>GROSS TOTAL:</td>
                                            <td style={{ width: '40%' }}>00,000.<span className={styles.floating_point}>00</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bill_status_container}>
                        <div className={styles.bill_status_title}>Setting Up Bill Status</div>
                        <div className={styles.bill_status_body}>
                            <div className={styles.bill_status_item}>
                                <div className={styles.bill_status_itemcheck}>
                                    <input type='checkbox' checked/>
                                </div>
                                <div className={styles.bill_status_itemlabel}>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: '#fff', border: '1px solid blue', color: 'blue' }}>DUE</span>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: 'blue', border: '1px solid blue' }}>PAY NOW</span>
                                </div>
                            </div>
                            <div className={styles.bill_status_item}>
                                <div className={styles.bill_status_itemcheck}>
                                    <input type='checkbox' checked disabled/>
                                </div>
                                <div className={styles.bill_status_itemlabel}>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: '#fff', border: '1px solid green', color: 'green' }}>00/00/0000</span>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: 'green', border: '1px solid green' }}>PAID</span>
                                </div>
                            </div>
                            <div className={styles.bill_status_item}>
                                <div className={styles.bill_status_itemcheck}>
                                    <input type='checkbox' checked disabled/>
                                </div>
                                <div className={styles.bill_status_itemlabel}>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: 'orange', border: '1px solid orange' }}>OVERDUE</span>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: 'blue', border: '1px solid blue' }}>PAY NOW</span>
                                </div>
                            </div>
                            <div className={styles.bill_status_item}>
                                <div className={styles.bill_status_itemcheck}>
                                    <input type='checkbox' checked disabled/>
                                </div>
                                <div className={styles.bill_status_itemlabel}>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: 'red', border: '1px solid red' }}>UNPAID</span>
                                    <span className={styles.bill_status_itemsublabel} style={{ backgroundColor: 'blue', border: '1px solid blue' }}>PAY NOW</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.section_right}>
                    <div className={styles.table_type_container}>

                        <div className={styles.table_container}>
                            {/* <!-- Header Row --> */}
                            <div className={styles.header_row}>
                                ACTION
                            </div>

                            {/* <!-- First Row --> */}
                            <div className={styles.data_row}>
                                <div className={styles.data_cell}>Start Date</div>
                                <div className={styles.data_cell}>Agent Name</div>
                                <div className={styles.data_cell}>Total Driver</div>
                                <div className={styles.data_cell}>New Driver/Month</div>
                            </div>
                            <div className={styles.data_row}>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'00/00/0000'} /></div>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'Xxxxxxxxxx12'} /></div>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'0,000'} /> </div>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'0,000'} /> </div>
                            </div>

                            {/* <!-- Second Row --> */}
                            <div className={styles.data_row}>
                                <div className={styles.data_cell}>Total Trip/Month</div>
                                <div className={styles.data_cell}>Earnings/Month</div>
                                <div className={styles.data_cell}>Last Bill Amount</div>
                                <div className={styles.data_cell}>Last Bill Status</div>
                            </div>
                            <div className={styles.data_row}>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'0,000'} /></div>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'0,000,000.00'} /></div>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'0,000.00'} /></div>
                                <div className={`${styles.data_cell} ${styles.blue}`}><input type='text' value={'00/00/0000'} /></div>
                            </div>

                            {/* <!-- Third Row --> */}
                            <div className={styles.data_row}>
                                <div className={styles.data_cell}>Operator-Fee/Mo</div>
                                <div className={styles.data_cell}>Fee/Trip</div>
                                <div className={styles.data_cell}>Deposit/New-Driver</div>
                                <div className={styles.data_cell}>Others</div>
                            </div>
                            <div className={styles.data_row}>
                                <div className={`${styles.data_cell} ${styles.red}`}><input type='text' value={'0,000.00'} /></div>
                                <div className={`${styles.data_cell} ${styles.red}`}><input type='text' value={'0,000.00'} /></div>
                                <div className={`${styles.data_cell} ${styles.red}`}><input type='text' value={'0,000.00'} /></div>
                                <div className={`${styles.data_cell} ${styles.red}`}><input type='text' value={'0,000.00'} /></div>
                            </div>

                        </div>
                    </div>
                    <div className={styles.table_type_container}>

                        <div className={styles.table_type_container}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillPreview;