import { Link, Outlet } from 'react-router-dom';
import styles from './App.module.css';

function App() {
 
  return (
    <div className={styles.container}>
      <h1>Welcome to the Music!</h1>

      <ul>
        <li><Link to='/albums'>Albumes</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
