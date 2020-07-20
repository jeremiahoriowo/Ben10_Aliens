import React from "react";

function Card({name, id}){   
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={require(`./Ben 10/alien${id}.png`)} alt="Ben 10 alien" width="280px" height="350px"/>
            <div>
                <h2 className=' f2 tc'>{name}</h2>
            </div>
        </div>
    );
}

export default Card;