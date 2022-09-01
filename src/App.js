
import './App.css';

function App() {
  return (
    <div className="doubtsContainer">
      <h1 className="heading">Got doubts??</h1>
     <p className="description1">Our mentors are always live for you</p>

     <p className="description2"> Use our WhatsApp group to ask your doubts or Join our Discard 
        server,<br /> both have a plenty of channels to help you stuck somewhere <br />
        at learning</p>
     <p className="neverstopdes">Learning should never stop</p>

     <div className="whatsappcontainer">

      <div className="aboutWhatsapp">
        <p className="whatsapp">Join WhatsApp</p>
        <img alt="whatsapp" className="wimg"
        src='/images/whatsapp.png'/>
      </div>

      <div className="aboutdiscard">
        <p className="whatsapp">Join Discard</p>
        <img alt="Discard" className="wimg"
        src="/images/discord.png"/>
      </div>
      </div>
    <div className="deserveContainer">
      <div>
        <h1 className="desheading">Get skills you deserve</h1>
        <p className="desdescription">with out worrying about from money to doubt assistance</p>
      </div>
      <div>
        <img src='/images/homepage-3.png' alt="homepage" className="homeimg"/>
      </div>
    </div>
  <div className="readytohelpContainer">
     <div>
       <img src='/images/homepage-4.png' alt="homepage" className="homeimg"/>
    </div>
  <div className="neatSkillsContainer">
      <h1 className="neatSkillsHeading">
        <span className="neat">neat</span>  skills is always ready to help <br />
        you to be on the right track
      </h1>
     <div className="totalContainer">
        <p className='students'>100+ <br />
        <span className="studentscolor">students</span>
        </p>
        <p className='students' >5+ <br />
        <span className="studentscolor">mentors</span>
        </p>
       <p className='students'>4+ <br />
       <span className="studentscolor">Courses</span>
        </p>
        </div>
     </div>
     </div>
  </div>
    
  );
}

export default App;
