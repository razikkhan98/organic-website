import "./App.css";
import About from "./component/pages/About";
import Home from "./component/pages/Home";
import ChooseUs from "./component/pages/ChooseUs";
import Customer from "./component/pages/Customer.jsx";
import Footer from "./component/pages/Footer.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <ChooseUs />
      <Customer/>
      <Footer/>
    </>
  );
}

export default App;
