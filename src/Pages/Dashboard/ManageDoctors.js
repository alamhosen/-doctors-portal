import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const {data: doctors, isLoading, refetch} = useQuery('doctor', () => fetch('http://localhost:5000/doctor', {
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl my-4 text-center'> Manage Doctors: {doctors.length}</h2>
            {
                doctors.map((doctor, index) => <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch ={refetch}
                setDeletingDoctor ={setDeletingDoctor}
                ></DoctorRow>)
            }
            {
                deletingDoctor && <DeleteConfirmModal
                deletingDoctor ={deletingDoctor}
                setDeletingDoctor ={setDeletingDoctor}
                refetch ={refetch}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors;