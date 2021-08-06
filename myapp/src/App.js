import React, { useState } from "react";
import Header from "./header/header"
import Row1 from "./row/row1"
import News from "./news/news"
import { Slider } from "./slider/slider"
import Modal from "./ModalWindow/modal"

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

  const [modalActive, setModalActive] = useState(false)

  return (
    <div>
      <Modal active={modalActive} setActive={setModalActive}></Modal>
      <div className="container-fluid">
        <header>
          <div className="row">
            <div className="logotip"><img src="./images/skodaauto.jpg" alt="SKODA" id="skodalogo" /></div>
            <div className="rain">
              <ul className="spiski">
                <a href="#">
                  <li className="liclass">Акции</li>
                </a>
                <a href="#">
                  <li className="liclass">
                    Модели
                    <ul className="submenu">
                      <li><a href="">SKODA RAPID</a></li>
                      <li><a href="">SKODA OCTAVIA</a></li>
                      <li><a href="">SKODA SUPERB</a></li>
                      <li><a href="">SKODA KODIAQ</a></li>
                    </ul>
                  </li>
                </a>
                <a href="#">
                  <li className="liclass">Диллеры</li>
                </a>
                <a href="#">
                  <li className="liclass">Клиентам</li>
                </a>
                <a href="#">
                  <li className="liclass" onClick={()=>{setModalActive(true)}}>
                    Записаться к нам</li>
                </a>

              </ul>
            </div>
          </div>
        </header>
          <Slider></Slider>      
        <div className="row">
          <Row1 car={car}></Row1>
        </div>
        <div className="row">
          <News news={news}></News>
        </div>
      </div>
    </div>
  );
}

export default App;
