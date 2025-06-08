import { useState, type FC } from "react"
import ColorButton from "./ColorButton"
import 'bootstrap/dist/css/bootstrap.min.css'


//Interfaces define the structure of and types an object uses.
interface TitleProps {
}

const ChangeCardColorComp: FC<TitleProps> = ({}) => {
  const [ColorOptions] = useState([
    "Red",
    "Purple",
    "Orange",
    "Brown",
    "DarkBlue",
    "DarkRed",
    "DarkOrange",
    "Pink",
    "LightBlue",
  ]);
  return (
    
  <>
    <div> Card Background Color</div>

    {ColorOptions.map((Color: any, index: number) => {
    function ChangeColor() {
        localStorage.setItem('CardColor', Color);
    }

    return (
      <ColorButton
        key={index}
        ColorName={Color}
        ChangeColor={ChangeColor}
      />
    );
    })}
  </>
  )
}



export default ChangeCardColorComp