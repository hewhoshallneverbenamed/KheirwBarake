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

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Signup /> */}
      <Footer />

    </div>
  );
}

export default App;
