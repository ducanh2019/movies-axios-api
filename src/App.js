import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { publicRoutes } from './routes';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index)=> {
            const Page = route.component;
            return <Route key={index} path={route.pathName} element={<Page />} />
          })}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
