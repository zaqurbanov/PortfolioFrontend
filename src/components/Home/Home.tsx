import { locations } from '#constants/index'
import useLocationStore from '#store/useLocation'
import useWindowStore from '#store/useWindowStore'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'

const Home = () => {
const projects  = locations.work.children
const {setActiveLocation} = useLocationStore()
const {openWindow} = useWindowStore()
const handleOpenProject = (item: any) => {
    setActiveLocation(item)
    openWindow("finder")
}

useGSAP(() => {
 Draggable.create(".folder")


}, []);
  return (
    <div className='p-12 gap-5'>

        <ul className='flex  flex-col'>

      {projects.map((item: any, i: number) => (
          <li key={i} className=' folder gap-5 justify-items-start flex flex-col  items-center w-max'
          
          onClick={()=>handleOpenProject(item)}
          >
            <img src={item.icon} alt="" className='w-16 h-16' />
            <p className='text-white'>{item.name}</p>

        </li>
      ))}
      </ul>
    </div>
  )
}

export default Home
