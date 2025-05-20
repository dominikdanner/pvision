import { Dispatch, FC, SetStateAction } from "react"

export const Button: FC<{state: [number, Dispatch<SetStateAction<number>>]}> = ({state}) => {
  
  const [counter, setCounter] = state
  
  return (
    <button className="h-20 w-60 bg-amber-400 rounded-3xl m-2 mx-35" onClick={() => setCounter(counter + 1)}>Button</button>
  )
}