import React from 'react';
import {dataEnglish, dataEspañol} from "../../DataBaseLocal/lenguage"
import reactIcon from '../../Assets/tecnologiasSVG//frontend/react-icon.svg';
import linkedinIcon from '../../Assets/iconsPage/linkedin.png';
import githubIcon from '../../Assets/iconsPage/github.png';
import instagramIcon from '../../Assets/iconsPage/instagram.png';
import style from './footer.module.css';
import gmail from '../../Assets/iconsPage/gmail.svg';

export function Footer({lenguageEN}) {
  return (
    <div>
      
         <div className={style.contain}>
            <div
              className={style.logo}
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <a href="/">
                <span>Ignacio </span>
                <span>Nicoletti</span>
              </a>
            </div>

            <div className={style.centerFooter}>
              <p>
              {lenguageEN?dataEnglish.footer.title:dataEspañol.footer.title}
              </p>
              <img src={reactIcon} alt="React" />
            </div>

            <div className={style.social_media}>
              <a
                href="mailto:nicolettiignacio5@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gmail} alt="Gmail" />
              </a>
              <a
                href="https://www.linkedin.com/in/ignacio-nicoletti/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="Linkedin" />
              </a>

              <a
                href="https://github.com/ignacio-nicoletti"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>

              <a
                href="https://www.instagram.com/nacho.nicoletti"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>
        
        
    </div>
  );
}
