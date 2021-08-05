import React from 'react';
import ReactDOM from 'react-dom';
import "./modal.css";

export default function Modal({active, setActive}) {
    return( 
    <div className={active ? "modalWindow active" : "modalWindow"} onClick={() => setActive(false)}>       
        <form className="obratnuj-zvonok" autocomplete="off" onClick = {e => e.stopPropagation()}>
        <div className="form-zvonok"> 
          <div>
            <label>Имя <span>*</span></label>
            <input type='text' name='username' required/>
        </div>
        <div>
            <label>Фамилия <span>*</span></label>
            <input type='text' name='username' required/>
        </div>
        <div>
            <label>Номер телефона (с кодом) <span>*</span></label>
            <input type='text' name='usernumber' required/>
        </div>
        <div>
            <label>Email</label>
            <input type='text' name='usernumber' required/>
        </div>
          <div>
            <label>Сообщение</label>
            <textarea placeholder="Введите сообщение" cols="30" rows="5"></textarea>
          </div>
          <input className="bot-send-mail" type='submit' value='Отправить'/>
        </div>
        </form> 
       </div>   
    )
}