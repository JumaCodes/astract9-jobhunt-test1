import Header from './components/Header';
import './assets/css/App.scss'
import Hero from './components/Hero';
import Ngmap from './components/Ngmap';
import PieChart from './components/Charts';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Ngmap />
      <PieChart />
      <Footer />
    </div>
  );
}

export default App;
