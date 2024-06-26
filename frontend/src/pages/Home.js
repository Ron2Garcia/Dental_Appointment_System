
import React, { useState } from 'react';
import Dialog from '../components/Dialog';
import Appointment from '../components/Appointment';
import NavBar from '../components/NavigationBar' 
import "../styles/Home.css"

const Schedule = () => {
    return (
        <div>
            <table className='scheduleTable'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Dentist</th>
                        <th>Status</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
      setIsOpen(true);
    };

    const closeDialog = () => {
      setIsOpen(false);
    };

    return (
        <>
            <NavBar></NavBar>
            <div className='homeContainer'>
                <div className='dialogOption'>
                    <span>Click here to set appointment</span>
                    <button className='dialogBtn' onClick={openDialog}>+</button>
                </div>
                <Dialog title="Sample Dialog" isOpen={isOpen} onClose={closeDialog} >
                  <Appointment></Appointment>
                </Dialog>
                <Schedule></Schedule>
            </div>
        </>

    )
}
export default Home;