import FifthPage from "./components/FifthPage"
import FirstPage from "./components/FirstPage"
import FourthPage from "./components/FourthPage"
import SecondPage from "./components/SecondPage"
import SixthPage from "./components/SixthPage"
import ThirdPage from "./components/ThirdPage"



function App() {
  return (
    <div className="scroll-container">
      <section id="first" className="page"><FirstPage /></section>
      <section id="second" className="page"><SecondPage /></section>
      <section id="third" className="page"><ThirdPage /></section>
      <section id="fourth" className="page"><FourthPage /></section>
      <section id="fifth" className="page"><FifthPage /></section>
      <section id="sixth" className="page"><SixthPage /></section>
    </div>
  );
}


export default App
