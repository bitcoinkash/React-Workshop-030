
import Mainnew from './components/mainnew';

import Footer from './components/footer';
import Header from './components/header';
import Navigation from './components/navigation';
import Section from './components/section';
import './App.css'
import Data from './Data';



function App() {


  return (

    <div>

    <Header /> 
    <Navigation />
    <Mainnew appname = {Data().name}/>
    <Section />
    <Footer />
    
  
   </div>
  )
}

export default App
