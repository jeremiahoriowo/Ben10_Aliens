import React from 'react';
import Card from './Card'; 

function Cardlist({aliens}) {
    return(
        <div>
            {
                aliens.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        id={aliens[i].id} 
                        name={aliens[i].name} 
                        />
                    );
                })
            }
        </div>
    )
}

export default Cardlist;