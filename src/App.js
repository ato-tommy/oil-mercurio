import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { useRoutes } from 'react-router-dom';
import router from './router/router';

function App() {
  const routes = useRoutes(router)
  return (

  <>
  <section className='relative'>
  <Navbar />
  {routes}
  </section>
 
</>
  );
}

export default App;
