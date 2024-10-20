import { useState } from 'react';
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { FiEyeOff } from 'react-icons/fi';
import { BsEyeFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

function Login() {
    const navigate = useNavigate()
    const [pass_type, set_pass_type] = useState('password')
    const [loader, setLoader] = useState(false)
    const [form_status, setform_status] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember_me: true,
        device_type: 'web',
        login_by: 'manual',
        application_name: 'passenger browser app',
        app_version: '2.0.2',
        device_token: 'test_app_token',
        app_name: 'passenger next app',
        social_unique_id: ''
    });

    const handleChange = () => {

    }

    const handleLogin = () => {

    }

    return (
        <div className={styles.container} style={{ backgroundImage: "url(assets/images/London_Map.png)"}}>
            <div className={styles.mainContainer}>
                {/* <Toaster position="top-right" /> */}
                <div className={styles.innerContainer}>
                    <div className={styles.title_section}>
                        <FaUser />
                        <span className={styles.title}>User Login</span>
                    </div>

                    <div className={styles.inputBox}>
                        <div className={styles.input_group}>
                            <input type='tel' id='email' name='email' placeholder='Email' width='300px' required={true} value={formData.email} onChange={handleChange} />
                        </div>
                        <div className={styles.input_group}>
                            <input type={pass_type} id='password' name='password' placeholder='Password' required={true} value={formData.password} onChange={handleChange} />

                            <span className={styles.passPrevBtn}>
                                {(pass_type === 'password') ?
                                    <FiEyeOff onClick={() => set_pass_type('text')} style={{ paddingLeft: 4 }} />
                                    :
                                    <BsEyeFill onClick={() => set_pass_type('password')} style={{ paddingLeft: 4 }} />
                                }
                            </span>

                        </div>
                    </div>


                    <div className={styles.bottomSection}>
                        <div className={styles.iconSection}>
                        </div>
                        <div className={styles.forgotPassword}>
                            <p style={{ color: "blue", borderBottom: '1px solid rgb(0 0 255 / 30%)', fontSize: '14px' }} className={styles.backBtn}>Forgot your password?</p>
                        </div>
                    </div>

                    <div className={styles.login}>
                        <button onClick={handleLogin} style={form_status ? {} : { pointerEvents: 'none', backgroundColor: '#708090', color: '#fff' }} >{loader ? 'LOADING...' : 'LOGIN'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;