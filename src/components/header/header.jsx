import style from './header.module.css';
import profile from '../../Assets/nacho.png';
import {dataEspañol, dataEnglish} from '../../DataBaseLocal/lenguage';

const Header = ({lenguageEN}) => {
  return (
    <div className={style.contain}>
      <div className={style.name}>
        <span>Ignacio Nicoletti</span>
        <button>{lenguageEN?"Contact Me":"Contacto"}</button>
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
