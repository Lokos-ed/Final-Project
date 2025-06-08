import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//Interfaces define the structure of and types an object uses.
interface TitleProps {
    SubmitFunction: () => void
}

const SubmitButton: FC<TitleProps> = ({SubmitFunction}) => {
  return (
  <>
    <div>  
    <button onClick={SubmitFunction}>
      Submit
    </button>
    </div>
  </>
  )
}


export default SubmitButton
