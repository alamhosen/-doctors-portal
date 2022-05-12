import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid drid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard cardTitle='Opening Hours' cardDescription='Lorem Ipsum is simply dummy text of the pri' img={clock} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
            <InfoCard cardTitle='Visit Our Location' cardDescription='Brooklyn, NY 10036, United States' img={marker} bgClass='bg-accent'></InfoCard>
            <InfoCard cardTitle='Contact Us Now' cardDescription='+000 123 456789' img={phone} bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCard>
        </div>
    );
};

export default Info;