import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from './App.module.css';
// import AutoComplete from './components/controls/AutoComplete';
//         <AutoComplete />

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default App;
