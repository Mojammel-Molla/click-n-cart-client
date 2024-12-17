import './App.css';
import Banner from './components/home-page/banner/Banner';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <h1>This is home page</h1>
      <Footer />
    </>
  );
}

export default App;
