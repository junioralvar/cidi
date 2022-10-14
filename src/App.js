
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {NavBarExample} from './components/navbar'
import About from './pages/About'
import Home from './pages/Home'
import Database from './pages/Database'
import Service from './pages/Service'
import Regulation from './pages/Regulation'
import Alert from './pages/Alert'
import Newspaper from './pages/Newspaper'
import Contact from './pages/Contact'
import Catalogue from './pages/Catalogue'
import Error404  from './pages/Error404';
import Administrador from './pages/Administrador'
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>          
          <Route path='/' element={<NavBarExample />}>
            <Route index element={<Home />} />
            <Route path='About' element={<About />} />
            <Route path='Database' element={<Database />} />
            <Route path='Service' element={<Service />} />
            <Route path='Regulation' element={<Regulation />} />
            <Route path='Alert' element={<Alert />} />
            <Route path='Newspaper' element={<Newspaper />} />            
            <Route path='Catalogue' element={<Catalogue />} />
            <Route path='Contact' element={<Contact />} />
            
            <Route path='*' element={ <Error404 replace to='/Error404' /> } />
          </Route>
          <Route path='Administrador' element={<Administrador />} />
          <Route path='Dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
