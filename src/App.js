import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Nav/Navbar';
import Hero from './components/Hero/Hero';
import Homepage from './pages/homepage/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import Error from './pages/Error/Error404';
import Login from './pages/acc_creation/Login.js';
import Signup from './pages/acc_creation/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Single from './components/Single/Single';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {/* <Dashboard /> */}
      {/* <Single /> */}
      {/* <Aboutus /> */}
      <Footer />

    </div>
  );
}

export default App;
