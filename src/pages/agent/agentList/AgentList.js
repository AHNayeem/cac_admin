import { useRef, useState } from 'react';
import styles from './AgentList.module.css'
import { MdFileDownload } from "react-icons/md";

function AgentList() {
    const [actionMenuPosition, setActionMenuPosition] = useState({ top: 0, right: 0 });
    const [showActionMenu, setShowActionMenu] = useState(false);
    const actionMenuRef = useRef(null);
    const scrollContainerRef = useRef(null);

    const handleActionClick = (event) => {
        const itemRect = event.target.getBoundingClientRect();
        const containerRect = scrollContainerRef.current.getBoundingClientRect();
        const popupHeight = actionMenuRef.current?.offsetHeight || 0;

        // Calculate available space in the container
        const spaceBelow = containerRect.bottom - itemRect.bottom;
        const spaceAbove = itemRect.top - containerRect.top;

        // Determine position based on space in the scroll container
        const topPosition = spaceBelow < popupHeight && spaceAbove > popupHeight
            ? itemRect.top - popupHeight // Position above if space below is limited
            : itemRect.bottom;           // Otherwise, position below

        // Calculate right position to be next to the button
        const rightPosition = window.innerWidth - itemRect.right; // Right edge of the viewport

        setActionMenuPosition({ top: topPosition, right: rightPosition });
        setShowActionMenu(true);
    };

    const handleCloseMenu = () => {
        setShowActionMenu(false);
    };

    return (
        <div className={styles.page_container}>
            <div className={styles.content_top_section}>
                <div className={styles.filter_section}>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Plate</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Make</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Year</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <select className={styles.filter_select}>
                            <option>All Type</option>
                        </select>
                    </div>
                    <div className={styles.filter_item}>
                        <div className={styles.filter_double}>
                            <div className={styles.double_pagi_count}>
                                <select>
                                    <option>20</option>
                                    <option>50</option>
                                    <option>100</option>
                                </select>
                            </div>
                            <div className={styles.double_download}>
                                <MdFileDownload />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.list_count_section}>
                    <div className={styles.count_text}>Registered Agents</div>
                    <div className={styles.count_number}>0,000,000</div>
                </div>
            </div>
            <div className={styles.table_section}>
                <table className={styles.data_table}>
                    <thead>
                        <tr>
                            <th>First Name <br /> Last Name</th>
                            <th>Email</th>
                            <th>Country <br /> Mobile</th>
                            <th>Address <br /> City </th>
                            <th>APP <br /> Plan</th>
                            <th>NI / SSN / TIN <br /> Passport</th>
                            <th>Nationality <br /> Work Permit</th>
                            <th>Bank <br /> Account Name</th>
                            <th>Sort Code <br /> Account No.</th>
                            <th>Date <br /> Action</th>
                        </tr>
                    </thead>
                    <tbody ref={scrollContainerRef}>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    <div className={styles.action_popup} ref={actionMenuRef} >
                                        {/* style={{ top: `${actionMenuPosition.top}px`, right: `${actionMenuPosition.right}px` }} */}
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>XXX XXXXXX</td>
                            <td>+44XXXXXXXXX </td>
                            <td>xxxx@xxxx.xxx</td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXX <br /> XXXXXXXXX </td>
                            <td> XXXXXXXXXX <br /> XXXXXXXXXXXXXX </td>
                            <td>
                                <div className={styles.action_section}>
                                    <span className={styles.date_label}>24 Dec 2021 </span> <br /> <span className={styles.action_label} onClick={handleActionClick}>Action</span>
                                    {/* <div className={styles.action_popup}>
                                        <div className={styles.action_item}>Edit Details</div>
                                        <div className={styles.action_item}>Profile : View</div>
                                        <div className={styles.action_item}>Operator : View</div>
                                        <div className={styles.action_item}>Referral : View</div>
                                        <div className={styles.action_item}>Commission : View</div>
                                        <div className={styles.action_item}>URLs Setting</div>
                                        <div className={styles.action_item}>Generate Commission</div>
                                        <div className={styles.action_item}>Accept / Decline</div>
                                    </div> */}
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>


            </div>
        </div>
    );
}

export default AgentList;