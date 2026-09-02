import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AnimationDetails from "./pages/AnimationDetails";
import AddAnimation from './pages/AddAnimation';
import NoPage from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element= {<Layout />}>
          <Route index element= {<Home />}/>
          <Route path= 'AddAnimation' element= {<AddAnimation />}/>
          <Route path= 'AnimationDetails/:animationId' element= {<AnimationDetails />}/>
          <Route path= '*' element= {<NoPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App