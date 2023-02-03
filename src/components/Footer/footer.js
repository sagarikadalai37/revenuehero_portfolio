import React from "react";
import "../Footer/footer.css"
import {BsLinkedin,BsGithub,BsMedium,BsInstagram,BsTwitter} from "react-icons/bs"



function Footer() {
  return (
    <footer id="footer"> 

    <div className="social-media">
        
          <a
            href="https://www.linkedin.com/in/sagarika-dalai/"
            target="_blank"
            rel="noopener noreferrer"
            
          >
          <BsLinkedin />
          
          </a>
          <a
            href="https://github.com/sagarikadalai37"
            target="_blank"
            rel="noopener noreferrer"
          >
          <BsGithub />
          </a>
          <a
          href="https://medium.com/@sagarikadalai"
          target="_blank"
          rel="noopener noreferrer"
        >
        <BsMedium />
       
        </a>
        <a
        href="https://www.instagram.com/__saagarika__/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <BsInstagram />
        
      </a>
        <a
        href="https://twitter.com/Sagarika_Dalai"
        target="_blank"
        rel="noopener noreferrer"
      >
     <BsTwitter />
      </a>
    </div>
    <div class="description">
    © Portfolio made by Sagarika
    </div>
      
    </footer>
  );
}

export default Footer;