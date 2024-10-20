import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './Layout.module.css'

const AdminLayout = () => {
  const [collapse, setCollapse] = useState(true)
  return (
    <div className={styles.layout_container}>
      <div className={styles.header_layout}>
        <Header />
      </div>
      <div className={`${styles.body_layout} ${collapse ? styles.collapse_true : styles.collapse_false}`}>
        <aside className={styles.sidebar_layout}>
          <Sidebar setCollapse={setCollapse} collapse={collapse} />
        </aside>
        <main className={styles.right_layout}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
