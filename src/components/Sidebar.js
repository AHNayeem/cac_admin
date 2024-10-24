import { Link, useLocation, useSearchParams } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { useCallback } from 'react';
import { IoChevronForward } from "react-icons/io5";

export const links = [
    { name: 'Agent', path: 'agent', sub_routes: ['agent-list', 'agent-add', 'agent-setting','statement-preview','bill-preview'] },
    { name: 'Operator', path: 'operator', sub_routes: ['operator-list', 'operator-add', 'operator-setting'] },
    { name: 'Driver', path: 'driver', sub_routes: ['driver-list', 'driver-add', 'driver-setting'] },
    { name: 'Passenger', path: 'passenger', sub_routes: ['passenger-list', 'passenger-setting'] },
    { name: 'Vehicle', path: 'vehicle', sub_routes: ['vehicle-list', 'vehicle-add'] },
    { name: 'Trip History', path: 'trip-history', sub_routes: [] },
    { name: 'Payment', path: 'payment', sub_routes: ['payment-list','payment-add'] },
    { name: 'Referral', path: 'referral', sub_routes: ['referral-list','referral-add'] },
    { name: 'Update Request', path: 'update-request', sub_routes: ['request-by-passenger', 'request-by-driver', 'request-by-agent', 'request-by-operator'] },
    { name: 'service Type', path: 'service-type', sub_routes: ['service-list', 'service-add'] },
    { name: 'Dispatcher', path: 'dispatcher', sub_routes: ['dispatcher-list','dispatcher-add'] },
    { name: 'Mass Message', path: 'mass-message', sub_routes: ['message-list','message-add'] },
    { name: 'Issue & Report', path: 'issue-report', sub_routes: ['issue-list','issue-add'] },
    { name: 'Sub-Admin', path: 'sub-admin', sub_routes: ['sub-admin-list', 'sub-admin-add'] },
    { name: 'Setting', path: 'setting', sub_routes: ['app-passenger', 'app-driver'] },
];

function Sidebar({ collapse, setCollapse }) {
    const location = useLocation()
    const [searchParams] = useSearchParams(); // Destructure the array to get `searchParams`
    // const page = searchParams.get('page');

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);
            return params.toString();
        },
        [searchParams]
    );

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_top}>
                <p onClick={() => setCollapse(prev => !prev)} className={`${styles.collapse_header} ${collapse && styles.collapse_active}`}> <span style={{ marginRight: '10px' }}>Admin</span> <span className={styles.arrow_icon}><IoChevronForward /></span></p>
            </div>
            <div className={`${styles.sidebar_bottom} ${collapse && styles.collapse_bottoom}`}>
                {links.map((link, i) => (
                    <Link
                        key={'link_' + i}
                        title={link.name}
                        to={`${link.path}${link.sub_routes.length > 0 ? '?' + createQueryString('page', link.sub_routes?.[0]) : ''}`} // Simplify the URL concatenation
                        className={`${styles.left_link} ${location.pathname.indexOf(link.path) > -1 ? styles.active_link : ''} ${collapse && styles.collapse_link}`}
                    >
                        {collapse ? link.name.charAt(0) : link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
