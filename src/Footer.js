import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter ,faInstagram, faGithub  } from "@fortawesome/free-brands-svg-icons"
function Footer(){
    return(
        <div className="footer">
           <a href='https://twitter.com/AggrawalSwati'className='twitter'><FontAwesomeIcon icon={faTwitter} size = '2x' /></a>
           <a href='https://instagram.com/swatiaggrawal1'className='instagram'><FontAwesomeIcon icon={faInstagram} size = '2x' /></a>
           <a href='https://github.com/swatiaggrawal' className='github'><FontAwesomeIcon icon={faGithub} size = '2x' /></a>
          
        </div>)
}

export default Footer;