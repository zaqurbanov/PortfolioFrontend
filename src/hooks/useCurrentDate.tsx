import React from "react"


const useCurrentDate = () => {
const [currentDate , setCurrentDate] = React.useState("")

React.useEffect(() => {
    const date = new Date()
    
    setCurrentDate(`${date.toDateString()} ${date.getHours()}:${date.getMinutes()}` )
  },[])
  return {currentDate}
}

export default useCurrentDate
