import useWindowStore from "#store/useWindowStore";

const WindowControls = ({ name }: { name: string; }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div className=" flex gap-1 items-center" id="window-controls">
      <button onClick={() => closeWindow(name)} className="close"></button>

      <button className="minimize"></button>
      <button className="maximize"></button>
      
    </div>
  );
};

export default WindowControls;
