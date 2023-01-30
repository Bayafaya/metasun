import React from "react";
import "./Contacts.scss";
function Contacts({ active, setActive }) {
  return (
    <div className={active ?  'modal active': 'modal'}>
      <a className="exit" onClick={() => setActive(false)}>
        <img src="src/images/close_24px.svg" alt="close_24px" />
      </a>
      <div className="modal__content">
        <p>Metasun is waiting for OG scouts, prophets and community leaders!</p>
        <h1>
          Join <span>The Community</span>
        </h1>
        <div className="community_links">
          <a target="_blank"  href="https://discord.gg/FBRDkAz6">
            <img src="src/images/Button.svg" alt="Button" />
          </a>
          <a target="_blank"  href=" https://t.me/alex_qj1">
            <img src="src/images/Button-1.svg" alt="Button" />
          </a>
          <a  target="_blank" href="https://twitter.com/kuzbass888">
            <img src="src/images/Button-2.svg" alt="Button" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
