import { locations } from "#constants/index";
import useLocationStore from "#store/useLocation";
import useWindowStore from "#store/useWindowStore";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

const Home = () => {
  const projects = locations.work.children;
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const handleOpenProject = (item: any) => {
    
    setActiveLocation(item);
    openWindow("finder");
  };
  
  useGSAP(() => {

    const draggable  = Draggable.create(".folder",{
      type:"x,y",
      bounds:"main",
      inertia: true,
      edgeResistance: 0.5,
      onClick:function () {
        
        const projectId = this.target.id.split("-")[1];
        handleOpenProject(projects[projectId])
      }
    });

    return () => draggable.forEach((d) => d.kill());
  }, []);

  return (
    <div className="p-12 gap-5">
      <ul className="flex  flex-col ">
        {projects.map((item: any, i: number) => (
          <li
            key={i}
            id={`folder-${i}`}
            className=" folder gap-1 z-0 justify-items-start flex flex-col  items-center w-max"
            onClick={() => handleOpenProject(item)}
          >
            <img src={item.icon} alt="" className="  w-8 h-8 md:w-16 md:h-16" />
            <p className="text-white md:text-xl text-sm">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
