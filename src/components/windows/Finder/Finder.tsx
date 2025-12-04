import WindowControls from "#components/WindowControls";
import { locations } from "#constants/index";
import WIndowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/useLocation";
import useWindowStore from "#store/useWindowStore";
import RenderFindList from "./RenderFindList";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openItem = (item: any) => {
    console.log(item);
    if (item.fileType == "pdf") return openWindow("resume");
    if (item.kind == "folder") return setActiveLocation(item);
    if (item.fileType == "url" || item.fileType == "fig")
      return window.open(item.href, "_blank");
    if (item.fileType == "txt") return openWindow("txtfile", item);
    if (item.fileType == "img") return openWindow("imgfile", item);
  };
  return (
    <WIndowWrapper windowKey="finder" windowName="finder">
      <>
        <div id="window-header">
          <WindowControls name={"finder"} />
          <h2>Finder</h2>
        </div>
        <div className="bg-white flex h-full">
          <div className="sidebar">
            <RenderFindList
              renderName="Favorites"
              items={Object.values(locations)}
            />
            <RenderFindList renderName="Work" items={locations.work.children} />
          </div>

          <div>
            <ul className="content ">
              {activeLocation?.children.map((item: any) => {
                return (
                  <li
                    key={item.id}
                    className={item.position}
                    onClick={() => openItem(item)}
                  >
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    </WIndowWrapper>
  );
};

export default Finder;
