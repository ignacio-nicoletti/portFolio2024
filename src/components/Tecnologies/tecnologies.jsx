import style from './tecnologies.module.css';

import react from '../../Assets/tecnologiasSVG/frontend/react-icon.svg';
import css from '../../Assets/tecnologiasSVG/frontend/css-icon.svg';
import redux from '../../Assets/tecnologiasSVG/frontend/redux-icon.svg';
import typescript from '../../Assets/tecnologiasSVG/frontend/type.png';
import javascript from '../../Assets/tecnologiasSVG/frontend/javas.png';
import nextjs from '../../Assets/tecnologiasSVG/frontend/nextjs.png';
import csharp from '../../Assets/tecnologiasSVG/frontend/Csharp.svg';

import nodeJs from '../../Assets/tecnologiasSVG/backend/node-icon.svg';
import express from '../../Assets/tecnologiasSVG/backend/express-icon.svg';
import JWT from '../../Assets/tecnologiasSVG/backend/JWT.svg';
import Bcrypt from '../../Assets/tecnologiasSVG/backend/Bcrypt.svg';
import NodeEmailer from '../../Assets/tecnologiasSVG/backend/NodeEmailer.svg';
import Net from '../../Assets/tecnologiasSVG/backend/net.svg';

import mongoDb from '../../Assets/tecnologiasSVG/database/mongodb-icons.svg';
import sql from '../../Assets/tecnologiasSVG/database/mysql-icon.svg';
import postgrest from '../../Assets/tecnologiasSVG/database/postgrestSQL.svg';
import Firebase from '../../Assets/tecnologiasSVG/database/FireBase.svg';
import sqlserver from '../../Assets/tecnologiasSVG/database/SQLserver.svg';

import canva from '../../Assets/tecnologiasSVG/design/canva.svg';
import figma from '../../Assets/tecnologiasSVG/design/figma.svg';
import marvelApp from '../../Assets/tecnologiasSVG/design/marvelApp.svg';
import adobeXd from '../../Assets/tecnologiasSVG/design/adobeXd.svg';
import {dataEnglish, dataEspañol} from '../../DataBaseLocal/lenguage';

const TecnologiesMain = ({lenguageEN}) => {
  return (
    <div className={style.grilla}>
      <div className={style.tecnologies}>
        <h3>
          {' '}
          {lenguageEN
            ? dataEnglish.about.subtitles[0]
            : dataEspañol.about.subtitles[0]}
        </h3>
        <div className={style.iconTecnologies}>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://developer.mozilla.org/es/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                alt="HTML"
              />

              <p className={style.titleTech}>
                HTML
              </p>
            </a>
          </div>

          <div className={style.DivIconTecnologies}>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={css} alt="CSS" />
              <p className={style.titleTech}>CSS</p>
            </a>
          </div>

          <div className={style.DivIconTecnologies}>
            <a
              href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={javascript} alt="JavaScript" />
              <p className={style.titleTech}>
                Javascript
              </p>
            </a>
          </div>

          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={typescript} alt="Typescript" />
              <p className={style.titleTech}>
                Typescript
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://es.react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={react} alt="ReactJS" />
              <p className={style.titleTech}>
                ReactJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={nextjs} alt="NextJS" />
              <p className={style.titleTech}>
                NextJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://dotnet.microsoft.com/es-es/languages/csharp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={csharp} alt="C#" />
              <p className={style.titleTech}>
                C#{' '}
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={redux} alt="Redux" />
              <p className={style.titleTech}>
                Redux
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://axios-http.com/es/docs/intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  'https://raw.githubusercontent.com/devicons/devicon/master/icons/axios/axios-plain.svg'
                }
                alt="Axios"
              />
              <p className={style.titleTech}>
                Axios
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className={style.tecnologies}>
        <h3>
          {lenguageEN
            ? dataEnglish.about.subtitles[1]
            : dataEspañol.about.subtitles[1]}
        </h3>
        <div className={style.iconTecnologies}>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://nodejs.org/es"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img src={nodeJs} alt="NodeJS" />
              <p className={style.titleTech}>
                NodeJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://expressjs.com/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={express} alt="ExpressJS" />{' '}
              <p className={style.titleTech}>
                ExpressJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://mongoosejs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongoose/mongoose-original.svg'
                }
                alt="Mongoose"
              />
              <p className={style.titleTech}>
                MongooseJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://sequelize.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  'https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg'
                }
                alt="Sequelize"
              />
              {' '}
              <p className={style.titleTech}>
                SequelizeJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">
              <img src={JWT} alt="Jason Web Token" />
              <p className={style.titleTech}>

                Json Web Token
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.npmjs.com/package/bcrypt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Bcrypt} alt="BCrypt" />
              <p className={style.titleTech}>

                BcryptJs
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://nodemailer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={NodeEmailer} alt="NodeEmailer" />
              <p className={style.titleTech}>
                NodeEmailer{' '}
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://nodemailer.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Net} alt=".net" />
              <p className={style.titleTech}>
                .NET
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://socket.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg"
                alt=".net"
              />
              <p className={style.titleTech}>
                socket.io
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className={style.tecnologies}>
        <h3>
          {lenguageEN
            ? dataEnglish.about.subtitles[2]
            : dataEspañol.about.subtitles[2]}
        </h3>
        <div className={style.iconTecnologies}>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.mongodb.com/es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mongoDb} alt="MongoDB" />
              <p className={style.titleTech}>
                MongoDB
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.mysql.com"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img src={sql} alt="MySQLDB" />{' '}
              <p className={style.titleTech}>
                MySQL
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={postgrest} alt="PostGrestDB" />
              <p className={style.titleTech}>
                PostgreSQL
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://firebase.google.com/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Firebase} alt="FireBaseDB" />
              <p className={style.titleTech}>
                FireBase
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.microsoft.com/es-es/sql-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={sqlserver} alt="sqlserver" />
              <p className={style.titleTech}>
                SQL server
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className={style.tecnologies}>
        <h3>
          {lenguageEN
            ? dataEnglish.about.subtitles[3]
            : dataEspañol.about.subtitles[3]}
        </h3>
        <div className={style.iconTecnologies}>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.canva.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={canva} alt="Canva" />
              <p className={style.titleTech}>
                Canva
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <img src={figma} alt="Figma" />{' '}
              <p className={style.titleTech}>
                Figma
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://www.adobe.com/ar/products/photoshop.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  'https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg'
                }
                alt="photoshop"
              />
              <p className={style.titleTech}>
                Photoshop
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://marvelapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={marvelApp} alt="MarvelApp" />
              <p className={style.titleTech}>
                MarvelApp
              </p>
            </a>
          </div>
          <div className={style.DivIconTecnologies}>
            <a
              href="https://helpx.adobe.com/es/xd/get-started.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={adobeXd} alt="adobeXd" />
              <p className={style.titleTech}>
                Adobe XD
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TecnologiesMain;
