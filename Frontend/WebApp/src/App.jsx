import { Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './pages/Layout';
import Home from './pages/Home';
import AddAnimation from './pages/AddAnimation';
import NoPage from './pages/NoPage';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='AddAnimation' element={<AddAnimation />}/>
          <Route path='*' element={<NoPage />}/>
        </Route>
      </Routes>
  );
}

export default App
