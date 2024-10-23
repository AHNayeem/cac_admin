import React, { useState } from 'react'
import styles from './DispatcherAdd.module.css'

const initialActiveRides = [
  { id: 1, driver: 'John Doe', passenger: 'Alice Smith', status: 'In Progress', destination: 'Airport' },
  { id: 2, driver: 'Jane Doe', passenger: 'Bob Johnson', status: 'Waiting', destination: 'Train Station' },
];

const availableDrivers = ['John Doe', 'Jane Doe', 'David Clark'];

export default function DispatcherAdd() {
  const [activeRides, setActiveRides] = useState(initialActiveRides);

  return (
    <div className={styles.page_container}>
      <div className={styles.inner_container}>
        <div className={styles.form_section}>
          <div className={styles.table_caption}>
            <p className={styles.form_name}>Assign New Ride</p>
            <p className={styles.form_number}>Form: A1</p>
          </div>
          <table className={styles.form_table}>
            <tbody>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Select Driver</td>
                <td style={{ width: '75%' }} colspan="4">
                  <select className={styles.select_recipient}>
                    <option value="">Select Driver</option>
                    {availableDrivers.map(driver => (
                      <option key={driver} value={driver}>{driver}</option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Passenger Name</td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Destination</td>
                <td style={{ width: '75%' }} colspan="4">
                <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }} colspan="4">
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
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}><input className={styles.input_field} type='text' /></td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
                  <input className={styles.input_field} type='text' />
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '75%' }}>
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
  )
}
