import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import SideBar from './comps/SideBar'
import RCard from './comps/RCard';
import './App.css'

interface Props {
  List: any
  SetList: any
}

function App({List, SetList}: Props) {
  
  const navigate = useNavigate();

  useEffect(() => {
    console.log("App Saw Update")
  }, [List]); 


  console.log(List)
  return (
    <>
      <SideBar/>



      <div className="container" style={{display: "table" }}>

      {List!.map((Data: any) => {
        function CallDelete() {
          const newList = List.filter((DataB:any) => DataB.id !== Data.id);
          SetList( newList); 
          fetch(`https://68425d6de1347494c31c8fb6.mockapi.io/api/v1/recipies/${Data.id}`, {
            method: 'DELETE'
        })
        }

        function CallEdit() {

          console.log("Call Edit")
         
          navigate('/PageTwo', { state: { EditID: Data.id } });
          
        }

  return (
    <RCard
      key={Data.id}
      Name={Data.name}
      Desc={Data.description}
      Ins={Data.ingredients}
      ID={Data.id}
      Delete={CallDelete}
      Edit={CallEdit}
    />
  );
})}
      
      </div>
      
    </>
    
  )
}

export default App
