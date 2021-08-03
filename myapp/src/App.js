import React from "react";
import Header from "./header/header"
import Row1 from "./row/row1"
import News from "./news/news"

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
  id: 1, TextContent: "lorem*10"
 },
 {
  id: 2, TextContent: "lorem*10"
 },
 
]

  return (
  <div>
    <header>
      <Header />
    </header>
    <div className="container-fluid">
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
