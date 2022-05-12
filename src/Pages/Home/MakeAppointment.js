import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex justify-center items-center px-0'>
            <div className='flex-1 hidden lg:block'>
            <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='px-5 flex-1'>
                <h2 className='text-xl text-primary font-bold py-5'>Appointment</h2>
                <h3 className='text-4xl text-white'>Make an appointment Today</h3>
                <p className='text-white py-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum, quibusdam quam, sapiente enim quo autem ipsum repellendus, blanditiis adipisci veritatis laudantium officiis aperiam error magni eligendi numquam quod amet! Vel iste at modi velit nesciunt eveniet corrupti placeat rem?</p>
                <PrimaryButton>Get Stared</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;