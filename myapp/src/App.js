import React from "react";
import Header from "./header/header"
import Row1 from "./row/row1"
import News from "./news/news"
import {Slider} from "./slider/slider"

function App() {

  const car = [{
    id: 1, carName: "SKODA OCTAVIA"
  },
  {
    id: 2, carName: "SKODA RAPID"
  },
  {
    id: 3, carName: "SKODA SUPERB"
  },
  {
    id: 4, carName: "SKODA KODIAQ"
  }
 ]
 const news = [{
  id: 1, TextContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi,minima maiores eligendi distinctio vel adipisci. Dicta optio perspiciatis quod, doloribus labore, corporis,iure voluptate veniam nesciunt maxime expedita sapiente."
 },
 {
  id: 2, TextContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus modi,minima maiores eligendi distinctio vel adipisci. Dicta optio perspiciatis quod, doloribus labore, corporis,iure voluptate veniam nesciunt maxime expedita sapiente."
 },
 
]

  return (
  <div>
    <header>
      <Header />
    </header>
    <div className="container-fluid">
 
        <Slider></Slider>

      <div className="row"> 
        <Row1 car = {car}></Row1>
      </div>
      <div className="row"> 
        <News news = {news}></News>
      </div>
    </div>
  </div>
  );
}

export default App;
