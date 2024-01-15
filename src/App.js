
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Services from './components/services/Services';
import BookSlider from './components/book-slider/BookSlider';
import {books} from './data/books'
function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <BookSlider data={books} />
    </div>
  );
}

export default App;
