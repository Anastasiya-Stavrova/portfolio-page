import NavBar from "./components/NavBar/NavBar.js";
import Banner from "./components/Banner/Banner.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Contacts from "./components/Contacts/Contacts.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
