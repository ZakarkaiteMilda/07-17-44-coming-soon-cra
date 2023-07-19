// import logo from './logo.svg';
import './App.css';
import './Layout.css';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">

      <main>
        <Hero />
        <Main />
      </main>
        <Footer />
    </div>
  );
}

export default App;
