import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{index + 1}</th>
                            <th>
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                            </th>
                            <td>{name}</td>
                            <td>{specialty}</td>
                            <td>
                                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>

                               
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorRow;