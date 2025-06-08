import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import './index.css'

//Get Init Data from Server
const ServerLink = "https://68425d6de1347494c31c8fb6.mockapi.io/api/v1/recipies"
const response = await fetch(ServerLink);
let Data = await response.json(); 

//Setup Defaults for the BackgroundColor and RCard Background Color
if (localStorage.getItem('BackgroundColor') === null) {
  localStorage.setItem('BackgroundColor', 'White');
}
if (localStorage.getItem('CardColor') === null) {
  localStorage.setItem('CardColor', 'Blue');
}

//Setup States and Routes for the Three Pages
function MainPage() {

  
    const [List, SetList]= useState(Data)

    let BG: string = localStorage.getItem('BackgroundColor') ?? "White"; //gets the Current Card Color, or uses Blue as it's Default.

  return (
    <>

    <div style={{ width: "100", backgroundColor:BG}}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App List={List} SetList={SetList}/>} />
        <Route path="/PageTwo" element={<PageTwo List={List} SetList={SetList} ServerLink={ServerLink}/>} />
        <Route path="/PageThree" element={<PageThree/>} />
    </Routes>
    </BrowserRouter>

    </div>

    </>
    
  )
}

export default MainPage
