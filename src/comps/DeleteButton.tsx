import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//Interfaces define the structure of and types an object uses.
interface TitleProps {
    DeleteFunction: () => void
}

const DeleteButton: FC<TitleProps> = ({DeleteFunction}) => {
  return (
  <>
    <div>  
    <button onClick={DeleteFunction}>
      Delete
    </button>
    </div>
  </>
  )
}



export default DeleteButton