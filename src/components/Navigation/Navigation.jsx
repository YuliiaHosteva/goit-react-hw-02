import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navlink}>
      <Link to="/profile"> Profile </Link>
      <Link to="/friend-list"> Friend list </Link>
      <Link to="/transaction-history"> Transaction history </Link>
    </nav>
  );
};