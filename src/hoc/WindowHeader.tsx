import WindowControls from '#components/WindowControls'
import type { JSX } from 'react'

interface Props {
    windowKey: string
    name: string
    children?: JSX.Element  

}
const WindowHeader = ({windowKey,name,children}:Props) => {
  return (
    <div className='flex bg-gray-50 px-3 items-center'>
          <WindowControls name={windowKey} />
         <div id="window-header">
          <h2>{name}</h2>
        </div>
          {children}
    </div>
  )
}

export default WindowHeader
