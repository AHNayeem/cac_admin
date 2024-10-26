import React from 'react'
import styles from './MessageAdd.module.css'

export default function MessageAdd() {
  return (
    <div className={styles.page_container}>
      <div className={styles.inner_container}>
        <div className={styles.form_section}>
          <div className={styles.table_caption}>
            <p className={styles.form_name}>Add New Message</p>
            <p className={styles.form_number}>Form: A1</p>
          </div>
          <table className={styles.form_table}>
            <tbody>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Recipients</td>
                <td style={{ width: '17.5%' }}>
                  <select className={styles.select_recipient}>
                    <option>Passenger</option>
                    <option>01</option>
                  </select></td>
                <td style={{ width: '17.5%' }}>
                  <select className={styles.select_recipient}>
                    <option>Driver</option>
                    <option>01</option>
                  </select>
                </td>
                <td style={{ width: '17.5%' }}>
                  <select className={styles.select_recipient}>
                    <option>Agent</option>
                    <option>01</option>
                  </select>
                </td>
                <td style={{ width: '17.5%' }}>
                  <select className={styles.select_recipient}>
                    <option>Operators</option>
                    <option>01</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}></td>
                <td style={{ width: '17.5%' }}>
                  <div className={styles.recipient_container}>
                    <div className={styles.recipient}>P</div>
                    <div className={styles.recipient}>P</div>
                    <div className={styles.recipient}>P</div>
                    <div className={styles.recipient_label}>+ 1</div>
                  </div>
                </td>
                <td style={{ width: '17.5%' }}>
                  <div className={styles.recipient_container}>
                    <div className={styles.recipient}>D</div>
                    <div className={styles.recipient}>D</div>
                    <div className={styles.recipient}>D</div>
                    <div className={styles.recipient_label}>+ 2</div>
                  </div>
                </td>
                <td style={{ width: '17.5%' }}>
                  <div className={styles.recipient_container}>
                    <div className={styles.recipient}>A</div>
                    <div className={styles.recipient}>A</div>
                    <div className={styles.recipient}>A</div>
                    <div className={styles.recipient_label}>+ 3</div>
                  </div>
                </td>
                <td style={{ width: '17.5%' }}>
                  <div className={styles.recipient_container}>
                    <div className={styles.recipient}>O</div>
                    <div className={styles.recipient}>O</div>
                    <div className={styles.recipient}>O</div>
                    <div className={styles.recipient_label}>+ 4</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Message</td>
                <td style={{ width: '75%' }} colspan="4">
                  {/* <input className={styles.input_field} type='text' /> */}
                  <textarea className={styles.textarea_field} placeholder='Write your message here...'></textarea>
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Schedule (optional):</td>
                <td style={{ width: '75%' }} colspan="4">
                  <input className={styles.input_field} type="datetime-local" />
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
            <button>PREVIEW</button>
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}
