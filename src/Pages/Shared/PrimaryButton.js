import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="btn btn-secondary uppercase text-white bg-gradient-to-r from-secondary to-primary mb-8">{children}</button>
    );
};

export default PrimaryButton;