import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import styles from './App.module.css';

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
