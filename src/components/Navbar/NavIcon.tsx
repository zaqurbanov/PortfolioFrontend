import { navIcons } from '#constants/index'

const NavIcon = () => {
    return (
        <ul>
            {navIcons.map(({id,img}) => {
                return (
                    <li key={id}>
                        <img src={img} alt={`${id}-${img}`} />
                    </li>
                )
            })}
        </ul>
    )
}

export default NavIcon
