import { useEffect, useState } from "react";
import "./App.scss";

import DustOfLights from "./components/DustOfLights";
import GlitchBox from "./components/GlitchBox";
import Matrix from "./components/Matrix";
import NewHeader from "./components/NewHeader";
import SunTry from "./components/SunTry";

function App() {
  const [contactsActive, setContactsActive] = useState(false);
  const changeState = (newValue)=>{
    setContactsActive(newValue)
  }
  return (
    <div className="container">
      <SunTry />
    <div className="opacity__for_firs_block"></div>
       <NewHeader active={contactsActive} setActive={changeState}/>

      <div id="1" className="firs_block">
        <main className="main_section">
          <p className="back_text">
            Experts in Smart Contracts, NFTs, and Gaming Arts
          </p>
          <div className="hero">
            <div className="light_block">
              <p>
                Build <br /> <span>the future</span>
              </p>{" "}
              <DustOfLights />
            </div>
            <div className="light_block">
              <GlitchBox />
              <p>with the leading</p>
            </div>
            <div className="light_block">
              <span>web3</span>
              <p>development studio</p>
            </div>
          </div>
          <p className="back_text">
            Crafting secure and innovative solutions for the decentralized world
          </p>
        </main>

          <div className="discover_button" onClick={()=>setContactsActive(true)}>
            <img src="/images/left-up_arrow.svg" alt="left-up_arrow" />
            <span>
              Discover <br /> Metasun
            </span>
          </div>
      </div>
      <div id='2' className="new_block">
       
      </div>
      {/* ----------------1----------------- */}
      <div id="3" className="new_block">
        <div className="our__works">
          <img src="/images/project_1.png" alt="project_1" />
          <div className="our__projects__text">
            <h1>Comprehensive WEB3 Development Services</h1>
            <p>
              Our team of experienced developers specializes in creating and
              auditing smart contracts, NFTs, and gaming arts on the blockchain.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------2------------------ */}
      <div id="4" className="new_block">
        <div className="our__works">
          <img src="/images/project_2.png" alt="project_1" />
          <div className="our__projects__text">
            <h1>Quality assurance</h1>
            <p>
              We prioritize security and reliability in all of our projects and
              offer thorough testing and auditing to ensure the highest
              standards.
            </p>
          </div>
        </div>
      </div>
      {/* ----------------3----------------- */}
      <div id="5" className="new_block">
        <div className="our__works">
          <img src="/images/project_3.png" alt="project_1" />
          <div className="our__projects__text">
            <h1>Fast turn around times</h1>
            <p>
              Our agile process allows us to deliver high-quality solutions
              efficiently and effectively, without sacrificing quality.
            </p>
          </div>
        </div>
      </div>
      {/* ----------------4----------------- */}
      <div id="6" className="new_block">
        <div className="our__works">
          <img src="/images/project_4.png" alt="project_1" />
          <div className="our__projects__text">
            <h1>Customized solutions</h1>
            <p>
              We work closely with our clients to understand their unique needs
              and provide customized solutions that meet their specific
              requirements
            </p>
          </div>
        </div>
      </div>
      {/* ----------------5----------------- */}
      <div id="7" className="new_block">
        <div className="our__works">
          <img src="/images/project_5.png" alt="project_1" />
          <div className="our__projects__text">
            <h1>Proven track record</h1>
            <p>
              With years of experience and a portfolio of successful projects,
              we have established ourselves as a trusted leader in the web3
              development space.development space.
            </p>
          </div>
        </div>
      </div>
      {/* -----------------projects----------------- */}
      <div id="8" className="new_block">
        <div className="our__projects">
          <h1>Projects</h1>
          <div className="cards__block">
            <div className="card__item">
              <div className="animations">   
                <Matrix />

              </div>
           
              <h4>CryptoChurch</h4>
              <p>
                Donec facilisis tortor ut augue lacinia, at viverra est semper.
                Sed sapien metus, scelerisque{" "}
              </p>
            </div>
            <div className="card__item">
              
              <div className="animations">
              <img src="/images/background.png" alt="background" />
              </div>
          
              <h4>The name of project one</h4>
              <p>
                Donec facilisis tortor ut augue lacinia, at viverra est semper.
                Sed sapien metus, scelerisque{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ----------footer------------- */}
      <footer className="foot">
        <a href="#">@METASUN Services FZ-LLC.</a>
        <img src="/images/Logo.svg" alt="logo" />
        <div>
          <span>Terms Of Service &nbsp; Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}

export default App;

