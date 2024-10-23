import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Header.module.css'
import { Fragment, useCallback } from 'react';
import { links } from './Sidebar';

function Header() {
    const location = useLocation()
    console.log("🚀 ~ Header ~ location:", location)
    const [searchParams] = useSearchParams(); // Destructure the array to get `searchParams`
    const page = searchParams.get('page');

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    return (
        <header className={styles.main_header}>
            <div className={styles.head_left}>
                <div className={styles.home_btn}>Home</div>
            </div>
            <div className={styles.head_mid}>
                {links.filter(f => location.pathname.indexOf(f.path) > -1)?.map((v, i) =>
                    <Fragment key={'btn_' + i}>
                        {v?.sub_routes?.map((m, ii) =>
                            <Link to={`${v?.path}?${createQueryString('page', m)}`} className={`${styles.head_button} ${page === m && styles.button_active}`} key={'btn_l' + ii}>{m?.split('-').join(' ')}</Link>
                        )}
                    </Fragment>
                )}
            </div>
            <div className={styles.head_right}>
                <div className={styles.logout_btn}>Logout</div>
            </div>
        </header>
    );
}

export default Header;