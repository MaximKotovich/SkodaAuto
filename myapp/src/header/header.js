import React from 'react';
import ReactDOM from 'react-dom';

export default function Header() {
    return(
        <div className="container-fluid">
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
                    </ul>
                </div>            
            </div>
        </div>
    )
}