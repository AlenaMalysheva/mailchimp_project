import './App.css';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import Header from './components/Header';
import Products from './components/Products';
import Plans from './components/Plans/'
import Integrations from './components/Integrations';
import AdditionalInfo from './components/AdditionalInfo';

function App() {
  return (
    <div>
      <Header />
      <Banner1 />
      <Products />
      <Banner2 />
      <Plans />
      <Integrations />
      <AdditionalInfo />
    </div>
  );
}

export default App;
