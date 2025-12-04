import WindowControls from '#components/WindowControls'
import WIndowWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/useWindowStore';

const Image = () => {
    const {windows} = useWindowStore();
    const {data} = windows.imgfile
  return (
    <WIndowWrapper windowKey='imgfile' windowName='imgfile'>
      <>
      <div id="window-header">
          <WindowControls name={"imgfile"} />
          <h2>{data?.name}</h2>
        </div>

        <div>
            <img  src={data?.imageUrl} alt={data?.name} 
            className='w-full'
            />
        </div>
      </>
    </WIndowWrapper>
  )
}

export default Image
