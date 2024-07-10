import style from './ProjectsPage.module.css';
import DBProyect from '../../DataBaseLocal/DBProjects';
import githubIcon from '../../Assets/iconsPage/github-icon.svg';
import deployIcon from '../../Assets/iconsPage/external-link-icon.svg';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const ProjectsPage = ({lenguageEN}) => {
  const [filter, setFilter] = useState ('Todos');
  const [projectsFilters, setProjectsFilter] = useState ([]);

  useEffect (
    () => {
      setProjectsFilter (
        DBProyect.filter (project => project.category.includes (filter))
      );
    },
    [filter]
  );

  return (
    <div className={style.contain}>
      <div className={style.title}>

        <h1>mis proyectos</h1>
      </div>
      <div className={style.filterProject}>
        <p
          onClick={() => setFilter ('Todos')}
          className={filter === 'Todos' ? style.selected : ''}
        >
          Todos
        </p>
        <p
          onClick={() => setFilter ('Mobile')}
          className={filter === 'Mobile' ? style.selected : ''}
        >
          Mobile
        </p>
        <p
          onClick={() => setFilter ('Game')}
          className={filter === 'Game' ? style.selected : ''}
        >
          Juegos
        </p>
        <p
          onClick={() => setFilter ('E-commerce')}
          className={filter === 'E-commerce' ? style.selected : ''}
        >
          Tiendas
        </p>
        <p
          onClick={() => setFilter ('Sistema-de-gestion')}
          className={filter === 'Sistema-de-gestion' ? style.selected : ''}
        >
          Sitemas de gestion
        </p>
        <p
          onClick={() => setFilter ('Portfolios')}
          className={filter === 'Portfolios' ? style.selected : ''}
        >
          Portfolios
        </p>
        <p
          onClick={() => setFilter ('Challenges')}
          className={filter === 'Challenges' ? style.selected : ''}
        >
          Challenges
        </p>
      </div>

      <div className={style.ProjectsContain}>

        {projectsFilters.map (project => (
          <div className={style.card}>
            <div className={style.icondeploy}>
              {project.deploy === true
                ? <a href={project.linkDeploy} target="_blank" rel="noreferrer">
                    <img src={deployIcon} alt="" />
                  </a>
                : <a href={project.linkGitHub} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="" />
                  </a>}
            </div>
            <h1>
              <Link
                to={`/projects/${project.title}`}
                className={style.titleProject}
              >
                {project.title}
              </Link>
            </h1>

            <img src={project.PortadaProject} alt="" />
            <div className={style.description}>

              <p>{project.shortDescription}</p>
            </div>
            <div className={style.tecnologies}>
              {project.tecnologies.map ((el, index) => <p key={index}>{el}</p>)}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};
export default ProjectsPage;
