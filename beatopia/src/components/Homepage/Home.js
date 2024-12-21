import React, {useState , useEffect} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';

import StaticTaskCard from '../Kanban/StaticTaskCard';
import TitledMixCard from '../MixLab/TitledMixCard';

import axios from 'axios';

const Home = ({ updateFooterPlayer }) => { 

    const navigate = useNavigate();
    const [recentlyPlayedMixes, setRecentlyPlayedMixes] = useState([]);
    const [loading, setLoading] = useState(true);

    // const recentlyPlayedMixes = [
    //     {
    //         id: 1,
    //         title: "Study Beats",
    //         beat: "Chill rhythm",
    //         sound: "Chilled lo-fi",
    //         audioPath: `${process.env.PUBLIC_URL}/RnB.wav`
    //     },
    //     {
    //         id: 2,
    //         title: "Morning Drive",
    //         beat: "Upbeat tempo",
    //         sound: "Energetic pop",
    //         audioPath: `${process.env.PUBLIC_URL}/Sicily.wav`
    //     },
    //     {
    //         id: 3,
    //         title: "Jazz Nights",
    //         beat: "Smooth jazz",
    //         sound: "Sax and piano",
    //         audioPath: `${process.env.PUBLIC_URL}/RnB.wav`
    //     },
    //     {
    //         id: 4,
    //         title: "Indie Vibes",
    //         beat: "Guitar melodies",
    //         sound: "Soft indie",
    //         audioPath: `${process.env.PUBLIC_URL}/RnB.wav`
    //     }
    // ];

    // const mostPlayedMixes = [
    //     {
    //         id: 1,
    //         title: "Study Beats",
    //         beat: "Chill rhythm",
    //         sound: "Chilled lo-fi",
    //         audioPath: `${process.env.PUBLIC_URL}/RnB.wav`
    //     },
    //     {
    //         id: 2,
    //         title: "Morning Drive",
    //         beat: "Upbeat tempo",
    //         sound: "Energetic pop",
    //         audioPath: `${process.env.PUBLIC_URL}/Sicily.wav`
    //     },
    //     {
    //         id: 3,
    //         title: "Jazz Nights",
    //         beat: "Smooth jazz",
    //         sound: "Sax and piano",
    //         audioPath: `${process.env.PUBLIC_URL}/RnB.wav`
    //     },
    //     {
    //         id: 4,
    //         title: "Indie Vibes",
    //         beat: "Guitar melodies",
    //         sound: "Soft indie",
    //         audioPath: `${process.env.PUBLIC_URL}/RnB.wav`
    //     }
    // ];

    const soonDueTasks = [
        { id: "1", title: "Buy Stationery for School", label: "Personal", dueDate: "Nov 5, 2024", done: false },
        { id: "2", title: "Complete Math Homework", label: "Math", dueDate: "Oct 30, 2024", done: false },
        { id: "3", title: "Prepare for Team Meeting", label: "Work", dueDate: "Nov 1, 2024", done: false },
        { id: "4", title: "Plan Grocery Shopping", label: "Personal", dueDate: "Nov 5, 2024", done: false },
    ];

        useEffect(() => {
            const fetchMixes = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/get_recent_mixes', {
                        withCredentials: true // If authentication is required
                    });
    
                    // Update mixes with the full URL for the audio path
                    const updatedMixes = response.data.map((mix) => ({
                        ...mix,
                        audioPath: `http://localhost:5000/audio/mixes/${mix.audioPath}`, // Append the URL for mixes
                    }));
    
                    setRecentlyPlayedMixes(updatedMixes);  // Set mixes in state
                } catch (error) {
                    console.error("Failed to fetch mixes:", error);
                }
            };
    
            fetchMixes();
        }, []);  // Empty dependency array ensures this runs only once on mount

    const goToDashboard = () => navigate('/dashboard');
    const goToMixLab = () => navigate('/mixlab');
    const goToMyMixes = () => navigate('/mixes');
    
    return (
        <div className='home-container'>

            <h3 className='welcome-home'> Welcome back to <span className='beatopia-span'> Beatopia </span> ! What do you have on today's agenda?</h3>


            <div className='quick-access-panel'>

                <button className='quick-access-task-button' onClick={goToDashboard} title='Go to Dashboard'>View all your Tasks</button>
                <button className='quick-access-mix-button' onClick={goToMixLab} title='Go to MixLab'>Create a new Mix</button>
                <button className='quick-access-mixlab-button' onClick={goToMyMixes} title='Go to Mixes'>Navigate your Mixes</button>

            </div>

           
            <h3 className='grid-title'> Soon Due<span className='beatopia-span'>* </span></h3>
             
            <div className='my-mixes-grid home'>

                <div class="container">
                    <div class="row">

                        {soonDueTasks.length > 0 ? (
                                soonDueTasks.map((task, index) => (
            
                                    <div key={task.id} className="col-md-3 col-sm-6 col-12 mb-3">
                                        <StaticTaskCard  
                                            key={task.id} 
                                            id={task.id} 
                                            title={task.title} 
                                            label={task.label} 
                                            dueDate={task.dueDate} 
                                            done={task.done} 
                                            index={index}
                                        />
                                        
                                    </div>
                                ))
                        ) : (
                            // placeholder for empty mixes
                            <div>
                                No Mixes
                            </div>
                        )}

                    </div>
                </div>


            </div>

             
            <h3 className='grid-title'> Last Created</h3>

            <div className='my-mixes-grid home'>

                <div class="container">
                    <div class="row">

                        {recentlyPlayedMixes.length > 0 ? (
                                recentlyPlayedMixes.map((mix, index) => (
                                    <div key={mix.id} className="col-md-3 col-sm-6 col-12 mb-3">
                                        <TitledMixCard
                                            key={mix.id}
                                            id={mix.id}
                                            title={mix.title}
                                            beat={mix.beat}
                                            sound={mix.sound}
                                            audioPath={mix.audioPath}
                                            updateFooterPlayer={updateFooterPlayer}
                                            index={index}
                                        />
                                    </div>
                                ))
                        ) : (
                            // placeholder for empty mixes
                            <div>
                                No Mixes
                            </div>
                        )}

                    </div>
                </div>


            </div>

            {/* <h3 className='grid-title'> Most Played</h3>

            <div className='my-mixes-grid home'>

                <div class="container">
                    <div class="row">

                        {mostPlayedMixes.length > 0 ? (
                                mostPlayedMixes.map((mix, index) => (
                                    <div key={mix.id} className="col-md-3 col-sm-6 col-12 mb-3">
                                        <TitledMixCard
                                            key={mix.id}
                                            id={mix.id}
                                            title={mix.title}
                                            beat={mix.beat}
                                            sound={mix.sound}
                                            audioPath={mix.audioPath}
                                            updateFooterPlayer={updateFooterPlayer}
                                            index={index}
                                        />
                                    </div>
                                ))
                        ) : (
                            // placeholder for empty mixes
                            <div>
                                No Mixes
                            </div>
                        )}

                    </div>
                </div>


            </div> */}

                   

        </div>    
  );
};

export default Home;
