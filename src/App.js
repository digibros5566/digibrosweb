// import logo from './logo.svg';
import './App.css';
import Hero from "./Screens/Hero"
import Header from "./Screens/Header"
import Service from "./Screens/Service"
import Client from "./Screens/Client"
import Contact from "./Screens/Contact"
import Footer from "./Screens/Footer"

function App() {
  return (
    <>
      
        <Header/>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Service />
        </section>
        <section id="work">
          <Client />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer/>
    </>
  );
}

export default App;
