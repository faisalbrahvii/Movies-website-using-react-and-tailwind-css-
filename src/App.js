import AddToCard from "./Components/AddToCard";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Live from "./Components/Live";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Trends from "./Components/Trends";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Trends/>
      <Movies/>
      <Live/>
      <AddToCard/>
      <News/>
      <Footer/>
      {/* <Details/> */}
      
    </>
  );
}

export default App;
