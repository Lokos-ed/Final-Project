import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

//Interfaces define the structure of and types an object uses.
interface TitleProps {
    ChangeColor: () => void
    ColorName: string
}

const ColorButton: FC<TitleProps> = ({ChangeColor, ColorName = '#3498db'}) => {
  return (
  <>
    <button style={{ backgroundColor: ColorName }} onClick={ChangeColor}>
       {ColorName}
    </button>
  </>
  )
}



export default ColorButton