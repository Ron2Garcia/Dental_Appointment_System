
import React, { useEffect, useState } from 'react';
import Dialog from '../components/Dialog';
import Appointment from '../components/Appointment';
import NavBar from '../components/NavigationBar' 
import axios from 'axios'
import "../styles/Home.css"


const Schedule = () => {
    const [schedules, setSchedules] = useState([])
    const loadSchedule = async () => {
        const url = `http://localhost:3050/api/schedules/`
        const getData = await axios.get(url).then(res=> {
            return res.data
        })
        setSchedules(getData)
        console.log(schedules,'getData')
    }
    useEffect(()=>{
        loadSchedule()
    },[])
    return (
        <div>
            <table className='scheduleTable'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Dentist</th>
                        <th>Status</th>
                        {/* <th>Remarks</th> */}
                    </tr>
                </thead>
                <tbody>
                    {schedules.map(item=>{
                        <tr>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.dentist}</td>
                            <td>On-going</td>
                        </tr>
                    })}
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
                <Dialog title="Schedule" isOpen={isOpen} onClose={closeDialog} >
                  <Appointment onClickSave={closeDialog}></Appointment>
                </Dialog>
                <Schedule></Schedule>
            </div>
        </>

    )
}
export default Home;