import style from './header.module.css';
import profile from '../../Assets/nacho.png';
import {dataEspañol, dataEnglish} from '../../DataBaseLocal/lenguage';

const Header = ({lenguageEN}) => {
  return (
    <div id="Header" className={style.contain}>
      <div className={style.name}>
        <span>Ignacio Nicoletti</span>
        <a href="#Contact">

          <button>{lenguageEN ? 'Contact Me' : 'Contacto'}</button>
        </a>
      </div>

      <div className={style.imageProfile}>
        <img src={profile} alt="" />
      </div>

      <div className={style.titleContain}>
        <p className={style.title}>
          {lenguageEN ? dataEnglish.header.title : dataEspañol.header.title}
        </p>
        <p className={style.description}>
          {lenguageEN
            ? dataEnglish.about.description
            : dataEspañol.about.description}
        </p>
      </div>
    </div>
  );
};
export default Header;
