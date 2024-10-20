import styles from './SubAdminAdd.module.css'

function VehicleAdd() {
    return (
        <div className={styles.page_container}>
            <div className={styles.inner_container}>
                <div className={styles.form_section}>
                    <div className={styles.table_caption}>
                        <p className={styles.form_name}>Add Sub-Admin</p>
                        <p className={styles.form_number}>Form: S1</p>
                    </div>
                    <table className={styles.form_table}>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>First Name</td>
                                <td style={{ width: '70%' }}><input className={styles.input_field} type='text' /></td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Last Name</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Country</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            {/* <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>City</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr> */}
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Address</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Post Code</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Mobile</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Email</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Temporary Password</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            {/* <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Apps</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Category</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr> */}
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Select URLs</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.button_section}>

                    </div>
                </div>
                <div className={styles.form_section}>
                    <div className={styles.table_caption}>
                        <p className={styles.form_name}></p>
                        <p className={styles.form_number}>Form: S1</p>
                    </div>
                    <table className={styles.form_table}>
                        <tbody>
                            {/* <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr> */}
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}></td>
                                <td style={{ width: '70%',height:'38px' }}>
                                    {/* <input className={styles.input_field} type='text' /> */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.button_section}>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleAdd;