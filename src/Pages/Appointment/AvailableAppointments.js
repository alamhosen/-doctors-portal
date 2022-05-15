import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    
    )
    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formatedDate])
    return (
        <div>
            <h2 className='text-xl text-secondary text-center'>Available Appointments on {format(date, 'PP')}</h2>
            <div className='grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;