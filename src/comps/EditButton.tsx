import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//Interfaces define the structure of and types an object uses.
interface TitleProps {
    EditFunction: () => void
}

const EditButton: FC<TitleProps> = ({EditFunction}) => {
  return (
  <>
    <div>  
    <button onClick={EditFunction}>
      Edit
    </button>
    </div>
  </>
  )
}



export default EditButton