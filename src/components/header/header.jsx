import style from './header.module.css';
import profile from '../../Assets/nacho.png';
import {dataEspañol, dataEnglish} from '../../DataBaseLocal/lenguage';

const Header = ({lenguageEN}) => {
  return (
    <div id="Header" className={style.contain}>
      <div className={style.name}>
        <span>Ignacio Nicoletti</span>
        
      </div>

      <div className={style.imageProfile}>
        <img src={profile} alt="" />
      </div>

      <div className={style.titleContain}>
        <span className={style.title}>
          {lenguageEN ? dataEnglish.header.title : dataEspañol.header.title}
        </span>
        <p className={style.description}>
          {lenguageEN
            ? dataEnglish.about.description
            : dataEspañol.about.description}
        </p>
        <a href="#Contact">

          <button>{lenguageEN ? 'Contact Me' : 'Contacto'}</button>
        </a>
      </div>
    </div>
  );
};
export default Header;
