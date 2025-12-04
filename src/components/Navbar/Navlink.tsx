import { navLinks } from "#constants/index";
import useWindowStore from "#store/useWindowStore";

const Navlink = () => {
  const { openWindow, windows, closeWindow } = useWindowStore();
  const toggleApp = (type: string) => {
    const window = windows[type];
    if (window.isOpen === false) {
      openWindow(type);
    } else {
      closeWindow(type);
    }
  };
  return (
    <ul>
      {navLinks.map(({ id, name, type }) => {
        return (
          <li key={id} onClick={() => toggleApp(type)}>
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlink;
