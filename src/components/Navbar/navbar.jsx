import style from './navbar.module.css';
import CurriculumES from '../../Assets/cv-nicolettiignacio-español.pdf';
import CurriculumEN from '../../Assets/cv-nicolettiignacio-english.pdf';
import {useState} from 'react';
import menuH from '../../Assets/iconNavbar/menu.svg';
import menuClose from '../../Assets/iconNavbar/menuCancel.svg';
import {dataEnglish, dataEspañol} from '../../DataBaseLocal/lenguage';

const Navbar = ({setLenguageEN, lenguageEN}) => {
  const [menu, setMenu] = useState (true);

  return (
    <div>
      <div className={style.contain}>
        <div className={style.navbarDesktop}>
          <div>
            <p className={style.NameLogo}>Ignacio Nicoletti</p>
          </div>
          <div className={style.options}>
            <div className={style.languageSwitch}>
              <input
                type="checkbox"
                className={style.languageSwitchCheckbox}
                id="toggle"
                onClick={() => setLenguageEN (!lenguageEN)}
              />
              <label className={style.languageSwitchLabel} htmlFor="toggle">
                <span className={style.languageSwitchInner} />
                <span className={style.languageSwitchSwitch} />
              </label>
              <div className={style.languageText}>
                <span className={style.languageTextEn}>EN</span>
                <span className={style.languageTextEs}>ES</span>
              </div>
            </div>

            {lenguageEN
              ? dataEnglish.navBarOptions.map ((option, index) => (
                  <div className={style.link} key={index}>
                    <a href={option.path}>
                      <p>{option.option}</p>
                    </a>
                  </div>
                ))
              : dataEspañol.navBarOptions.map ((option, index) => (
                  <div className={style.link} key={index}>
                    <a href={option.path}>
                      <p>{option.option}</p>
                    </a>
                  </div>
                ))}

            <a
              href={lenguageEN ? CurriculumEN : CurriculumES}
              className={style.buttonCV}
            >
              CV
            </a>
          </div>
        </div>

        <div className={style.navbarMobile}>
          <div className={style.buttonMenus}>
            <div className={style.NameLogo}>
              <p>
                Ignacio Nicoletti
              </p>
            </div>
            {menu === true
              ? <img src={menuH} alt="" onClick={() => setMenu (false)} />
              : <img src={menuClose} alt="" onClick={() => setMenu (true)} />}
          </div>
          
          <div className={menu ? style.optionsActive : style.options}>
            <div className={style.switch}>
              <input
                onClick={() => setLenguageEN (!lenguageEN)}
                className={style.container_toggle}
                type="checkbox"
                id="switch"
                name="mode"
              />
              <label htmlFor="switch" />
              {lenguageEN === true ? <p>EN</p> : <p>ES</p>}
            </div>
            {lenguageEN
              ? dataEnglish.navBarOptions.map ((option, index) => (
                  <a key={index} href={option.path}>
                    <p>{option.option}</p>
                  </a>
                ))
              : dataEspañol.navBarOptions.map ((option, index) => (
                  <a key={index} href={option.path}>
                    <p>{option.option}</p>
                  </a>
                ))}

            <a href={CurriculumES} className={style.buttonCV}>
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
