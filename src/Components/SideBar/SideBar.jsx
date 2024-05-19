import { Link } from 'react-router-dom';
import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/bye">Bye</Link>
      </nav>
    </div>
  );
};

export default SideBar;
