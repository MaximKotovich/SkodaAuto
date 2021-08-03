import React from 'react';
import ReactDOM from 'react-dom';

export default function News(props) {
    return(
    <div>
        <div className="col-md-10">
            <p id="news">ПОСЛЕДНИЕ НОВОСТИ</p>
                {props.news.map(item => { 
                    return(                  
                   <a href="#"><div className="col-md-5"><img src={"./images/newsoct" + item.id.toString() + ".jpg"} id="newsoct1" alt="" />
                   {item.TextContent}
               </div></a>
                    )
                   }
                   )
                }
                
                <a href="#"><div className="button">ПОДРОБНЕЕ</div></a>
        </div>
    </div>
    )}