
import './App.css';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Services from './components/services/Services';
import BookSlider from './components/book-slider/BookSlider';
import Title from './components/title/Title';
import { books } from './data/books'

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Services />
      <Title title='Most gifted' />
      <BookSlider data={books} />

      <Title title='Best seller' />
      <BookSlider data={books} />

      <Title title='Most wished for' />
      <BookSlider data={books} />
    </div>
  );
}

export default App;
