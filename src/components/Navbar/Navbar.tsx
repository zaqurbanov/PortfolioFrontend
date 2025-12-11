import NavIcon from './NavIcon'
import Navlink from './Navlink'
import useCurrentDate from '#hooks/useCurrentDate'

const Navbar = () => {
  const { currentDate } = useCurrentDate()
  return (
    <nav>
      <div>
          <img src="/images/pear.png" alt="logo" className='w-8 ' />
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
