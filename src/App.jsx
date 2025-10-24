import { Route, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// styles
import "react-loadly/styles.css";
// components
import Header from './components/Header/Header';
import Home from './Pages/Home';
import CardItems from './Pages/CardItems';
import Slider from './components/HeroSlider/Slider';
import Footer from './components/Footer/Footer';
import Menu from './Pages/Menu';
import About from './Pages/About';
import ProductDetails from './Pages/ProductDetails';
import PagesLinks from './components/PagesLinks/PagesLinks';
import Checkout from './Pages/Checkout';
import Branches from './Pages/Branches';
// protected route
import ProtectedRoutes from './components/ProtectedRoute/ProtectedRoutes';
// actions
import { getData } from './Toolkit/Slice/DataSlice';

function App() {

  let {data, loading} = useSelector(state => state.DataSlice)
  
  const location = useLocation();
  const pathName = location.pathname;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getData())
  },[dispatch])

  return (
    <>
     <Header />
     {
      pathName === '/' && !loading && data && data.length > 0 && <Slider data={data} />
     }

     {
      pathName !== '/CardItems' && !pathName.includes('productDetails/') && !pathName.includes('/about') && !pathName.includes('/branches') && <PagesLinks />
     }
  
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/CardItems' element={<CardItems />} />
      <Route path='menu' element={<Menu />} />
      <Route path='about' element={<About />} />
      <Route path='/productDetails/:id' element={<ProductDetails />} />
      
      <Route element={<ProtectedRoutes />}>
        <Route path='/checkout' element={<Checkout />} />
      </Route>

      <Route path='/branches' element={<Branches />} />

     </Routes>

     {
      pathName.includes('productDetails/') || pathName.includes('/CardItems') || pathName.includes('/checkout') || pathName.includes('/branches') ? '' : <Footer />
     }
     
    </>
  )
}

export default App
