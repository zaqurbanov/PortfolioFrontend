import useWindowStore from "#store/useWindowStore";
gsap.registerPlugin(Draggable);

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import React, { useLayoutEffect, type JSX } from "react";
interface Props {
  children: JSX.Element;
  windowKey: string;
  windowName: string;
}
const WIndowWrapper = ({ children, windowKey }: Props) => {
  const { focusWindow, windows } = useWindowStore();
  const { zIndex, isOpen } = windows[windowKey];
  const ref = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    el.style.display = "block";
    if (isOpen) {
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 0.2, ease: "power3.out" },
      );
    } else {
      gsap.fromTo(
        el,
        { scale: 1, opacity: 1, y: 0 },
        { y: 40, scale: 0.8, opacity: 0, duration: 0.2, ease: "power3.out" },
      );
    }
  }, [isOpen]);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const [instance] = Draggable.create(el, {
      onPress: () => {
        focusWindow(windowKey);
      },
    });
    return () => instance.kill();
  }, []);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.display = isOpen ? "block" : "none";
  }, [isOpen]);
  return (
    <>
      {
        <section
          id={windowKey}
          style={{ zIndex }}
          className="absolute max-w-2xl"
          ref={ref}
        >
          
          {children}
        </section>
      }
    </>
  );
};

export default WIndowWrapper;
