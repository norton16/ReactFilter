import React from 'react';

const Card = ({ name, email, id }) => {
    return ( 
        // can only return one element
        <div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'></img>
            <div>
               <h2>{name}</h2> 
               <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;