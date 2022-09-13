import {useState, useEffect} from "react";
import './App.css'
import Title from './Title.jsx'
import CardRobot from './CardRobot.jsx'
// import Search from './Search.jsx'

export default function App() {
  return (
  <div>
  <body/>
  <Title />
    <CardRobot />
    <input type="search" placeholder="Recherche par nom"/>
  
  </div>
  )
}
