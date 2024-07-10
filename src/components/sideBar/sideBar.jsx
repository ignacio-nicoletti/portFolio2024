import style from './sideBar.module.css';

const SideBar = ({setSection}) => {
  return (
    <div className={style.contain}>
      <div className={style.imageProfile}>
    
      </div>

      <div className={style.options}>
        <p onClick={setSection("inicio")}>Inicio</p>
        <p onClick={setSection("proyectos")}>Proyectos</p>
        <p onClick={setSection("certifaciones")}>Certificaciones</p> 
        <p >Curriculum vitae</p>
      </div>
    </div>
  );
};

export default SideBar;
