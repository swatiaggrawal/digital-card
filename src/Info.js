import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import { faLinkdin } from '@fortawesome/free-solid-svg-icons'
// import { SocialIcon } from 'react-social-icons';
import { faLinkedin ,  } from "@fortawesome/free-brands-svg-icons"

function Info(){
    return(
        <>
            <div className='name'>
                <h1>Swati Aggrawal</h1>
            </div>
            <div className="field">
                <h1>Frontend Developer</h1>
            </div>
            <div className="website">
                <a href='https://swatiaggrawal.github.io/WebPortfolio/' >WebPortfolio</a>
            </div>
            
            <a href="mailto: swatiagg357@gmail.com" >
            <button className="email"> <FontAwesomeIcon icon={faEnvelope} />  Email </button>
            </a>
            <a href="https://www.linkedin.com/in/swati-aggrawal-02550a214" >
            <button className="linkdin" >  <FontAwesomeIcon icon={faLinkedin} />   LinkedIn </button>
            </a>
            <div className="about">
                <h1>About</h1>
                <p>I am a final year BTECH CSE student learning about various technical concepts like Data Structures, Algorithms, Artificial Intelligence and Machine Learning.</p>
            </div>
            <div className='interest'>
                <h1>Interests</h1>
                <p>Food expert. Music scholar. Reader. Internet fanatic.Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </>
    )
}
//faGithub
export default Info;