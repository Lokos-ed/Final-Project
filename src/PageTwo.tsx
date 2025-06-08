
import { useLocation, useNavigate } from 'react-router';
import SideBar from './comps/SideBar'
import InputBox from './comps/InputBox';
import SubmitButton from "./comps/SubmitButton";
import './App.css'

interface Props {
  List: any
  SetList: any
  ServerLink: string
}

function PageTwo({List, SetList, ServerLink}: Props) {

    const location = useLocation(); //Gets the Current Page
    const navigate = useNavigate(); //Router function that allows moving to another page within a function.

    let EditId = location.state?.EditID ?? 0;  

    function SubmitFunction() {
       

        console.log(EditId)
        const NameBox = document.getElementById("NameBox") as HTMLInputElement
        const DescriptionBox = document.getElementById('DescriptionBox') as HTMLInputElement
        const IngredientBox = document.getElementById('IngredientBox') as HTMLInputElement

        const NewID = Math.floor(Math.random() * 99999);
    
        if (EditId != 0) {

            console.log("meow")

          let NewList = List.filter(() => true);


            NewList.forEach((item:any, index:any) => {
              if (item.id == EditId) {
                NewList[index]["name"] = NameBox!.value!
                NewList[index]["description"] = DescriptionBox!.value!
                NewList[index]["ingredients"] = IngredientBox!.value!
              }
            });  

            
            const x = {
                name: NameBox!.value!, description: DescriptionBox!.value!, ingredients: IngredientBox!.value!
            }

            fetch(`${ServerLink}/${EditId}`, {
                method: 'PUT', //Tells the server to replace.
                //
                headers: {
                    //this tells the server that it is being sent json
                    'Content-Type': 'application/json'
                },
                //turns a table into json
                
                body: JSON.stringify(x)
              })
        
            SetList(NewList);



           EditId = 0

        } else if(EditId == 0) {


            const x = {
                id: NewID, name: NameBox!.value!, description: DescriptionBox!.value!, ingredients: IngredientBox!.value!
              }

            fetch(ServerLink, {
                method: 'POST',
                //
                headers: {
                    //this tells the server that it is being sent json
                    'Content-Type': 'application/json'
                },
                //turns a table into json
                
                body: JSON.stringify(x)
              })
        
            SetList(
                [
                ...List,
                { id: NewID, name: NameBox!.value!, description: DescriptionBox!.value!, ingredients: IngredientBox!.value!}
                ]
              );

        }
        navigate('/', {});
    }

  return (
    <>
    
    <SideBar/>
        <ul style={{ listStyleType: "none" }}>
      <li>
        {/* This passes the prop's PH and ID */}
        <InputBox PH="Name" ID="NameBox"/>
      </li>
      <li>
        <InputBox PH="Description" ID="DescriptionBox"/>
      </li>
      <li>
        <InputBox PH="Ingredients" ID="IngredientBox"/>
      </li>
    </ul>
    <ul style={{ listStyleType: "none", display: "inline-block" }}>
      <li>
        <div>
          <SubmitButton SubmitFunction={SubmitFunction}/>
        </div>
      </li>
    </ul>
        
    </>
    
  )
}

export default PageTwo