import { Outlet } from 'react-router-dom';

import SideBar from '../../../Components/SideBar/SideBar';

import styles from './Root.module.css';

export const RootLayout = () => {
  return (
    <div className={styles.rootLayout}>
      <div className={styles.container}>
        <SideBar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
