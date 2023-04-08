import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
