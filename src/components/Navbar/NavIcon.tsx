import { navIcons } from '#constants/index'
import { Moon, Sun } from 'lucide-react'
import useThemeStore from '#store/useThemeStore'

const NavIcon = () => {
  const { isDark, toggleDark } = useThemeStore()

  return (
    <ul className="flex items-center gap-3">
      {navIcons.map(({ id, img }) => (
        <li key={id}>
          <img src={img} alt={`icon-${id}`} className="w-4 h-4 dark:invert dark:opacity-80" />
        </li>
      ))}
      <li>
        <button
          type="button"
          onClick={toggleDark}
          aria-label="Toggle dark mode"
          className="cursor-pointer flex items-center"
        >
          {isDark
            ? <Sun size={16} strokeWidth={1.5} className="w-4 h-4 text-black dark:text-white opacity-70 dark:opacity-80" />
            : <Moon size={16} strokeWidth={1.5} className="w-4 h-4 text-black dark:text-white opacity-70 dark:opacity-80" />
          }
        </button>
      </li>
    </ul>
  )
}

export default NavIcon
