import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'; 

import TaskCard from '../Kanban/TaskCard';
import TitledMixCard from '../MixLab/TitledMixCard';

const Home = () => {

    const mixes = [
        {
            id: 1,
            title: "Study Beats",
            beat: "Chill rhythm",
            sound: "Chilled lo-fi"
        },
        {
            id: 2,
            title: "Morning Drive",
            beat: "Upbeat tempo",
            sound: "Energetic pop"
        },
        {
            id: 3,
            title: "Jazz Nights",
            beat: "Smooth jazz",
            sound: "Sax and piano"
        },
        {
            id: 4,
            title: "Indie Vibes",
            beat: "Guitar melodies",
            sound: "Soft indie"
        }
    ];

    const tasks = [
        { id: "1", title: "Buy Stationery for School", label: "Personal", dueDate: "Nov 5, 2024", done: false },
        { id: "2", title: "Complete Math Homework", label: "Math", dueDate: "Oct 30, 2024", done: false },
        { id: "3", title: "Prepare for Team Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
        { id: "4", title: "Plan Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
    ];

    const goToDashboard = () => {};
    const goToMixLab = () => {};
    const goToMyMixes = () => {};
    
    return (
        <div className='home-container'>

            <h3 className='welcome-home'> Welcome back to <span className='beatopia-span'> Beatopia </span> ! What do you have on today's agenda?</h3>


            <div className='quick-acess-panel'>

                <button className='quick-access-button' onClick={goToDashboard} title='Go to Dashboard'>View all your Tasks</button>
                <button className='quick-access-button' onClick={goToMyMixes} title='Go to Mixes'>Navigate your Mixes</button>
                <button className='quick-access-button' onClick={goToMixLab} title='Go to MixLab'>Create a new Mix</button>

            </div>

        </div>    
  );
};

export default Home;
