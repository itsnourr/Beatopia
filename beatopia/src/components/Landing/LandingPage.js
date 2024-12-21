import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react'; 
import PreAuthNavbar from '../Navigation/PreAuthNavbar';
import './LandingPage.css';
import FooterPlayer from '../Player/FooterPlayer';

const LandingPage = () => { 
  return (
    <div className="landing-container">
        <PreAuthNavbar/>

        <div className = "greetings">
            <h2 className='welcome-beatopia'> 
              Welcome to <span className='beatopia-span'> Beatopia </span> ! </h2>

            <h2 className='welcome-landing'> 
              An All-in-One 
              <span className='beatopia-span'> Productivity </span>  and 
              <span className='beatopia-span'> Music </span> Tool 
            </h2>
        </div>

        <div className="row text-center landing-my-5">
          <div className="col-md-4 landing-column">
            <img 
              src={`${process.env.PUBLIC_URL}/soundcloud.png`} 
              alt="SoundCloud" 
              className="landing-feature-image landing-mb-3" 
            />
            <h4>Immersive <span className='beatopia-span'> ambiance </span>
            with <span className='beatopia-span'> beats </span> and 
            <span className='beatopia-span'> sounds </span>
            </h4>
            <h6><span className='beatopia-span'>Lo-fi </span>+ Waterfall or Afro <span className='beatopia-span'> + Wind</span>?</h6>
            <p>
              Create mixes featuring your favorite beats blended with relaxing sounds of nature from our large collections of diverse beats and sounds..
            </p>
          </div>
          <div className="col-md-4 landing-column">
            <img 
              src={`${process.env.PUBLIC_URL}/heartbeat.png`} 
              alt="Heartbeat" 
              className="landing-feature-image landing-mb-3" 
            />
            <h4>immersive <span className='beatopia-span'> ambiance </span>
            with <span className='beatopia-span'> beats </span> and 
            <span className='beatopia-span'> sounds </span>
            </h4>
            <h6><span className='beatopia-span'>Lo-fi </span>+ Waterfall or Afro <span className='beatopia-span'> + Wind</span>?</h6>
            <p>
              Create mixes featuring your favorite beats blended with relaxing sounds of nature from our large collections of diverse beats and sounds..
            </p>
          </div>
          <div className="col-md-4 landing-column">
            <img 
              src={`${process.env.PUBLIC_URL}/soundcloud.png`} 
              alt="SoundCloud Again" 
              className="landing-feature-image landing-mb-3" 
            />
            <h4>immersive <span className='beatopia-span'> ambiance </span>
            with <span className='beatopia-span'> beats </span> and 
            <span className='beatopia-span'> sounds </span>
            </h4>
            <h6><span className='beatopia-span'>Lo-fi </span>+ Waterfall or Afro <span className='beatopia-span'> + Wind</span>?</h6>
            <p>
              Create mixes featuring your favorite beats blended with relaxing sounds of nature from our large collections of diverse beats and sounds..
            </p>
          </div>
        </div>
    </div>
  );
};

export default LandingPage;
