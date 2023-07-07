import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Shop from './pages/Shop';
import Error from './pages/Error';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/store' element={<Shop/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
