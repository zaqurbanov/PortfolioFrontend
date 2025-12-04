import WindowControls from "#components/WindowControls";
import WIndowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/useWindowStore";

const Text = () => {
  const { windows } = useWindowStore();
  const { data } = windows.txtfile;
  
  return (
    <WIndowWrapper windowKey="txtfile" windowName="txtfile">
      <div>
        <div id="window-header">
          <WindowControls name={"txtfile"} />
          <h2>{data?.name}</h2>
        </div>
        {data?.image && <img src={data.image} alt="" className="w-full" />}
        <div className="p-3 space-y-3 leading-relaxed text-balance text-gray-800 text-sm">
          {data?.description?.map((item: any, i: number) => (
            <p key={i}>{item}</p>
          ))}
          <p></p>
        </div>
      </div>
    </WIndowWrapper>
  );
};

export default Text;
