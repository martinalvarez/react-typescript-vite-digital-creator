import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import styles from './App.module.css';
import AutoComplete from './components/controls/AutoComplete';

function App() {
 
  return (
    <div className={styles.container}>
      <h1>Welcome to the Music!</h1>

      <NavBar />

      <AutoComplete />

      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App;
