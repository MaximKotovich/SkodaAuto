import React from 'react';
import ReactDOM from 'react-dom';

export default function Row1(props) {
       return(

    <div>
        { props.car.map(item =>{
            return( 
            <div className="model1">
                <div className="imgmodel1"><a href="#"><img src={"./images/imgmodel" + item.id.toString() +".jpg"} id="imgmodel1" alt="" /></a></div>
                <div className="textmodel1">{item.carName}</div>
           </div>
            )
        }
        ) 
        }
    </div>
    )
    }