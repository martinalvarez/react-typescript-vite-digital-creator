import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import LayoutContext from './context/LayoutContext';
import styles from './App.module.css';

// import AutoComplete from './components/controls/AutoComplete';
// <AutoComplete />

function App() {
  const { layout } = useContext(LayoutContext);

  return (
      <div className={`${styles.container} ${layout === 'dark' ? styles.darkContainer : styles.lightContainer}`}>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
  )
}

export default App;
