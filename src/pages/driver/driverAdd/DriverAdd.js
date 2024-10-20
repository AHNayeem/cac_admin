import styles from './DriverAdd.module.css'

function DriverAdd() {
    return (
        <div className={styles.page_container}>
            <div className={styles.inner_container}>
                <div className={styles.form_section}>
                    <div className={styles.table_caption}>
                        <p className={styles.form_name}>Add New Driver</p>
                        <p className={styles.form_number}>Form: A1</p>
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
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>City</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Address</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Postcode</td>
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
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Apps</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Operator</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
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
                        <p className={styles.form_number}>Form: A1</p>
                    </div>
                    <table className={styles.form_table}>
                        <tbody>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>PCO Licence</td>
                                <td style={{ width: '70%' }}><input className={styles.input_field} type='text' /></td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Licensing Authority</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Nationality</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Work Permit or Visa Number</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>BANK</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>IBAN</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Account Name</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Sort Code</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Account Number</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Upload Profile Image</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Upload Passport or ID</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{ width: '30%', textAlign: 'right', lineHeight: '13px' }}>Upload Permit or Visa</td>
                                <td style={{ width: '70%' }}>
                                    <input className={styles.input_field} type='text' />
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

export default DriverAdd;