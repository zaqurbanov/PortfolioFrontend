import { dockApps } from "#constants/index";
import React from "react";
import Tooltip from "./Tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useWindowStore from "#store/useWindowStore";
const Dock = () => {
  const {openWindow,closeWindow,windows} = useWindowStore()
  const dockRef = React.useRef<HTMLDivElement>(null);
  useGSAP(()=>{
    const dock = dockRef.current
    if(!dock) return
    const   icons = dock.querySelectorAll('.dock-icon')
    const animateIcons = (mouseX:any)=>{
        const {left} = dock.getBoundingClientRect()

        icons.forEach(icon => {
            const {left: iconLeft,width: iconWidth} = icon.getBoundingClientRect()
            const center = iconLeft -left + iconWidth/2
            const distance = Math.abs(mouseX - center)
            const intensity = Math.exp(-(distance**2)/4000)
            gsap.to(icon, {
              scale: 1+0.15*intensity,
              y:-15*intensity,
              duration:0.2,
              ease:"power1.out"

            })
          })
    }

    const handleMouseMove = (e:MouseEvent)=>{
        const {left}  = dock.getBoundingClientRect()
        animateIcons(e.clientX -left)
      } 

      const handleReset = ()=>{
        gsap.to(icons, {
          scale: 1,
          y:0,
          duration:0.2,
          ease:"power3.out"
        })
      }
      dock.addEventListener('mousemove',handleMouseMove)
      dock.addEventListener('mouseleave',handleReset)

      return ()=>{
        dock.removeEventListener('mousemove',handleMouseMove)
        dock.removeEventListener('mouseleave',handleReset)
      }
  },[])
  const toggleApp = (app:any) => {
    if(!app.canOpen) return
    
    const window  = windows[app.id]

    if(window.isOpen){
      closeWindow(app.id)
    }else{
      openWindow(app.id)
    }
  };
    

  return (
    <section id="dock">
      <div ref={dockRef} className="dock-container">
        {dockApps.map(({ canOpen, icon, id, name }) => {
          return (
            <div key={id} className="relative flex justify-center group">
              <button
                type="button"
                aria-label={name}
                className="dock-icon"
                disabled={!canOpen}
                onClick={() => toggleApp({ id, name , icon, canOpen })}
              >
                <img
                  src={`images/${icon}`}
                  alt={name}
                  loading="lazy"
                  className={`${canOpen ? "" : "opacity-60"}`}
                />
              </button>

              {<Tooltip name={name} />}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Dock;
