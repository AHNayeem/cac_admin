import styles from './AppPassenger.module.css'

function AppPassenger() {
    return (
        <div className={styles.page_container}>
            <div className={styles.inner_container}>
                <div className={styles.app_item}>
                    <div className={styles.app_left_content}>Label will be here.</div>
                    <div className={styles.app_mid_content}>Main content will be here.</div>
                    <div className={styles.app_right_content}>
                        <label class={styles.switch} htmlFor='switch'>
                            <input id='switch' type="checkbox" checked/>
                            <span class={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppPassenger;