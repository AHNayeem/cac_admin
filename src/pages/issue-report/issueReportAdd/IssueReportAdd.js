import React from 'react'
import styles from './IssueReportAdd.module.css'

export default function IssueReportAdd() {
  return (
    <div className={styles.page_container}>
      <div className={styles.inner_container}>
        <div className={styles.form_section}>
          <div className={styles.table_caption}>
            <p className={styles.form_name}>Report an Issue</p>
            <p className={styles.form_number}>Form: A1</p>
          </div>
          <table className={styles.form_table}>
            <tbody>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Issue Category</td>
                <td style={{ width: '75%' }} colspan="4">
                  <select className={styles.select_recipient}>
                    <option>Vehicle Issue</option>
                    <option>Payment Issue</option>
                    <option>Safety Concern</option>
                    <option>App Issue</option>
                    <option>Other</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Urgency Level</td>
                <td style={{ width: '75%' }} colspan="4">
                  <select className={styles.select_recipient}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ width: '25%', textAlign: 'right', lineHeight: '13px' }}>Describe the Issue</td>
                <td style={{ width: '75%' }} colspan="4">
                  {/* <input className={styles.input_field} type='text' /> */}
                  <textarea className={styles.textarea_field} placeholder='Provide details of the issue...'></textarea>
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
