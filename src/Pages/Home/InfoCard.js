import React from 'react';

const InfoCard = ({img, cardTitle, cardDescription, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-accent shadow-xl ${bgClass}`}>
            <figure className='pl-5'>
                <img src={img} alt="Album" />

            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDescription}</p>
            </div>
        </div>
    );
};

export default InfoCard;