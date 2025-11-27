import { navLinks } from '#constants/index'

const Navlink = () => {
    return (
        <ul>
            {navLinks.map(({id,name}) => {
                return (
                    <li key={id}>
                        <p>
                            {name}
                        </p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Navlink
