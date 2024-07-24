import { Link, useParams } from 'react-router-dom';
import style from './detailProject.module.css';
import { useEffect, useState } from 'react';
import DBProyect from '../../../DataBaseLocal/DBProjects';
import githubIcon from '../../../Assets/iconsPage/github-icon.svg';
import deployIcon from '../../../Assets/iconsPage/external-link-icon.svg';

const DetailProject = () => {
  const { params } = useParams();
  const [projectDetail, setProjectDetail] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);

  useEffect(() => {
    setProjectDetail(DBProyect.find(project => project.title === params));
  }, [params]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === projectDetail.MediaProject.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? projectDetail.MediaProject.length - 1 : prev - 1));
  };

  const nextVideoSlide = () => {
    setCurrentVideoSlide(prev => (prev === projectDetail.videoProject.length - 1 ? 0 : prev + 1));
  };

  const prevVideoSlide = () => {
    setCurrentVideoSlide(prev => (prev === 0 ? projectDetail.videoProject.length - 1 : prev - 1));
  };

  if (!projectDetail || !projectDetail.MediaProject) {
    return null;
  }

  return (
    <div className={style.contain}>
      <div className={style.backProjectsContain}>

        <div className={style.backProjects}>
          <Link to={'/projects'} className={style.Link}>
            <p>Volver a los proyectos</p>
          </Link>
        </div>

        <div className={style.icondeploy}>
          {projectDetail.deploy === true
            ? <a href={projectDetail.linkDeploy} target="_blank" rel="noreferrer">
                <img src={deployIcon} alt="" />
              </a>
            : <a href={projectDetail.linkGitHub} target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="" />
              </a>}

        </div>
      </div>

      <p className={style.title}>{projectDetail.title}</p>

      <div className={style.descriptionContain}>
        <p className={style.description}>{projectDetail.longDescription}</p>
      </div>

      <div className={style.carousel}>
        <button onClick={prevSlide} className={style.prev}>❮</button>
        <div className={style.carouselTrack}>
          {projectDetail.MediaProject.map((el, index) => (
            <img
              key={index}
              src={el}
              alt={`Project media ${index}`}
              className={`${style.slide} ${index === currentSlide ? style.active : ''}`}
            />
          ))}
        </div>
        <button onClick={nextSlide} className={style.next}>❯</button>
      </div>

      <div className={style.carousel}>
        <button onClick={prevVideoSlide} className={style.prev}>❮</button>
        <div className={style.carouselTrack}>
          {projectDetail.videoProject.map((el, index) => (
            <video
              key={index}
              src={el}
              controls
              className={`${style.slide} ${index === currentVideoSlide ? style.active : ''}`}
            />
          ))}
        </div>
        <button onClick={nextVideoSlide} className={style.next}>❯</button>
      </div>

      <div className={style.tenologiesContain}>
        <p>Tecnologías utilizadas:</p>
        <div className={style.tenologies}>
          {projectDetail.tecnologies.map((el, index) => (
            <p key={index}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
