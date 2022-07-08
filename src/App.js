import './App.css';
import Footer from './Compontent/Footer';
import Header from './Compontent/Header';
import  Feachered from './Compontent/Feachered';
import Suggested from './Compontent/Suggested';
import Nav from './Compontent/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Feachered />
      <Suggested />
      <Footer />
    </div>
  );
}

export default App;
