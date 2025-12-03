import Dock from '#components/Dock/Dock';
import Navbar from '#components/Navbar/Navbar';
import Welcome from '#components/Welcome/Welcome';
import Terminal from '#components/windows/Terminal/Terminal';
import Draggable from 'gsap/Draggable';
import gsap from 'gsap';
gsap.registerPlugin(Draggable)
function App() {
  
  return (
    <>

    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
    </main>
    </>
    
  )
}

export default App
