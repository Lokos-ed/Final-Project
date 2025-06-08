import { useState, type FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import ColorButton from "./ColorButton"



//Interfaces define the structure of and types an object uses.
interface TitleProps {
}


const ChangeBackgroundColor: FC<TitleProps> = ({}) => {
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
    <div>Background Color</div>

    {ColorOptions.map((Color: any, index: number) => {

    function ChangeColor() {
      localStorage.setItem('BackgroundColor', Color);
      window.location.reload();
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



export default ChangeBackgroundColor