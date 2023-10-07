import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, RouterProvider, Outlet, Routes, createBrowserRouter, createRoutesFromElements, Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import Offers from './components/Offers';
import Banner from './components/Banner';
import Informations from './components/Informations';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import MainInfo from './components/MainInfo';
import Footer from './components/Footer';


function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path='/' element={<Header />}>
  //       <Route path='/gallery' element={<Gallery />} />
  //     </Route>
  //   )
  // );
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/informations' element={<Informations />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
