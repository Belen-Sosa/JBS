
import './App.css';
import  {NavBar} from './components/NavBar';
import  {Banner} from './components/Banner';
import  { Skills } from "./components/Skills";
import {Projects} from "./components/Projects";
import { Footer } from "./components/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import WorkExperiencie from './components/WorkExperiencie';


function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <WorkExperiencie />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
