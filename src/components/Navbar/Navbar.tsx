import NavIcon from './NavIcon'
import Navlink from './Navlink'
import useCurrentDate from '#hooks/useCurrentDate'
import { Apple } from 'lucide-react'

const Navbar = () => {
  const { currentDate } = useCurrentDate()
  return (
    <nav>
      <div>
        <Apple />
        <p className='font-bold'>Qurbanov Zaur</p>
        <Navlink />
      </div>
      <div>
        <NavIcon />
        <time dateTime='2023'>{currentDate}</time>
      </div>
    </nav>
  )
}

export default Navbar
