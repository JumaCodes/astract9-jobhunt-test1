import Header from './components/Header';
import './assets/css/App.scss'
import Hero from './components/Hero';
import Ngmap from './components/Ngmap';
import PieChart from './components/Charts';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Ngmap />
      <PieChart />
    </div>
  );
}

export default App;
