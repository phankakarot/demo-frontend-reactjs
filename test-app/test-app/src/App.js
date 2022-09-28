import logo from './logo.svg';
import './App.css';

import Slider from './component/slider';
import Content from './component/content';
import Footer from './component/footer';
import Header from './component/header';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Content />
      <Footer />
    </>
  );
}

export default App;
