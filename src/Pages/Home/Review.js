import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum autem eos asperiores corporis doloremque et! Maxime consectetur non illum rem?</p>
                <div className="flex mt-5">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h3 className='text-3xl'>{review.name}</h3>
                        <h4 className='text-xl'>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;