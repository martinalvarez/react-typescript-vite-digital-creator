import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import NavBar from './components/NavBar';

function App() {
 
  return (
    <div className={styles.container}>
      <h1>Welcome to the Music!</h1>

      <NavBar />

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
