import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

//Interfaces define the structure of and types an object uses.
interface TitleProps {
}

const HeartButton: FC<TitleProps> = ({}) => {

  //Defines the State that manages the Heart Button
  let [HeartStatus, ChangeHeart] = useState("♡")

  //Ran when the Heart Button is clicked. Switches the Heart Button's text 
  //between the filled and unfilled variants by updating the state variable.
  function Heart() {

    console.log("meow")
    if (HeartStatus == "♡") {
        ChangeHeart("♥")
    } else {
      ChangeHeart("♡")
    }

  }

  return (
  <>
    <div>  
    <button onClick={Heart}>
      {HeartStatus}
    </button>
    </div>
  
  </>
  )
}



export default HeartButton