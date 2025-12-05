import Dock from '#components/Dock/Dock';
import Navbar from '#components/Navbar/Navbar';
import Welcome from '#components/Welcome/Welcome';
import Terminal from '#components/windows/Terminal/Terminal';
import Draggable from 'gsap/Draggable';
import gsap from 'gsap';
import Safari from '#components/windows/Safari/Safari';
import Resume from '#components/windows/Resume/Resume';
import Finder from '#components/windows/Finder/Finder';
import Text from '#components/Text/Text';
import Image from '#components/Image/Image';
import Contact from '#components/windows/Contact/Contact';
import RenderFindList from '#components/windows/Finder/RenderFindList';
import { locations } from './constants';
import Home from '#components/Home/Home';
gsap.registerPlugin(Draggable)
function App() {
  
  return (
    <>

    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>

      <Safari/>

      <Resume/>

      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
    </main>
    </>
    
  )
}

export default App
