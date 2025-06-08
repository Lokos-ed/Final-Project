import type { FC } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeartButton from './HeartButton';
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

//Interfaces define the structure of and types an object uses.
interface TitleProps {
  Name: String
  Desc: String
  Ins: String
  ID: String
  Delete: () => void
  Edit: () => void
}
//RCard is a Reaction Functional Component that uses the above titleprops.
const RCard: FC<TitleProps> = ({Name, Desc, Ins, Delete, Edit}) => {

  let BG: string = localStorage.getItem('CardColor') ?? "Blue"; //gets the Current Card Color, or uses Blue as it's Default.

  return (
    <>
  <div
    className="card mb-3"
    style={{
      minHeight: "250px",
      maxWidth: "25%",
      backgroundColor: BG,
      color: "white",
      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
      borderColor: "black",
      borderWidth: "2px",
      borderStyle: "solid",

    }}
  >
    <div
      className="card-header"
      style={{
        backgroundColor: BG,
        color: "white",
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
      }}
    >
      {Name}
    </div>

    <div
      className="card-body"
      style={{
        backgroundColor: BG,
        color: "white", 
        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
      }}
    >
      <h5 className="card-title">{Desc}</h5>
      <p className="card-text">
        {Ins}
        <br />

        <DeleteButton DeleteFunction={Delete} />
        <EditButton EditFunction={Edit} />
        <HeartButton />
      </p>
    </div>
  </div>
</>
  
    )
}



export default RCard