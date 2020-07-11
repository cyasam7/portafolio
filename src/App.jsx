import React, { useState, useEffect, Fragment } from "react";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import Header from "./Components/Header";
import Jumbotron from "./Components/Jumbotron";
import CardTecnologias from "./Components/CardTecnologias";
import ItemExperiencia from "./Components/ItemExperiencia";

function App() {
  const [repos, setRepos] = useState([]);
  let estudios = [
    {
      Titulo: "CBTIS 130",
      Fecha: "10/08/2017",
      Descripcion:
        "Estudie la la especialidad de programacion donde aprendí mis bases de programacion creando mi primer sistema en Java",
    },
    {
      Titulo: "Instituto Tecnologico de Durango",
      Fecha: "10/08/2022",
      Descripcion:
        "Estudie la carrera de Ingenieria en sistemas computacionales donde abri mi panorama de aprendizaje dentro de Desarrollo movil, Desarrollo Web y Aplicaciones de Escritorio",
    },
  ];
  let redesSociales = [
    "https://www.instagram.com/alexander.serrano86/",
    "https://www.facebook.com/elba.neado.12532364",
    "https://github.com/cyasam7",
  ];
  let tecnologias = [
    {
      titulo: "FRONTEND DEVELOPER",
      descripcion:
        "Me adentre al mundo del desarrollo web hace ya 1 año, empece aprendiendo lo basico de estas tecnologias, conforme fui avanzando, el desarrollo con html y css me parecia un poco lento y obte por aprender un framework",
      tecnologias: [
        "HTML, CSS, JAVASCRIP",
        "RESPONSIVE DESIGN",
        "CSS GRID",
        "SASS",
        "BOOSTRAP",
        "REACT",
        "STYLED COMPONENTS",
      ],
    },
    {
      titulo: "BACKEND DEVELOPER",
      descripcion:
        "Me adentre en el desarrollo web FullStack con el Stack MERN, me encanto desarrollar con reacr y cada dia voy aprendiendo cosas nuevas con nodejs y mongodb, actualmente me encuentro aprendiendo nuevas arquitecturas para el desarrollo de API's.",
      tecnologias: ["NODE.JS", "EXPRES", "MONGODB"],
    },
    {
      titulo: "MOVIL DEVELOPER",
      descripcion:
        "En la escuela aprendi Java pero note que era muy lento y me tomaba mucho tiempo en constuir una App muy sencilla, con el tiempo aprendi kotlin, pero nunca me gusto el desarrollo nativo aunque te facilita muchas cosas, ahi es donde aprendí a desarrollar en REACT NATIVE con Expo.",
      tecnologias: ["JAVA", "KOTLIN", "REACT NATIVE"],
    },
    {
      titulo: "DESKTOP DEVELOPER",
      descripcion:
        "La mayoria de los proyectos que me encargaban en la escuela fueron hechos en java, un lenguaje con el que me adentre al desarrollo de software y con el cual aprendi las bases de la programacion, junto con mysql.",
      tecnologias: ["JAVA", "MYSQL", "XAMPP", "C#", "SQLSERVER"],
    },
    {
      titulo: "PLUS",
      descripcion:
        "Estos son conocimientos sobre los cuales me destaco o que otras personas de mi institucion no tienen conocimientos.",
      tecnologias: [
        "MYSQL/SQLSERVER PROCEDIMIENTOS ALMACENADOS",
        "MYSQL/SQLSERVER CONCURRENCIA",
        "MYSQL/SQLSERVER VISTAS",
        "GIT Y GITHUB",
        "ACTUALMENTE APRENDIENDO REDUX",
        "WEBSOCKETS",
        "WEBPACK",
      ],
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/cyasam7/repos");
      const parse = await data.json();
      return parse;
    };
    fetchData().then((item) => {
      const filterData = [];
      item.map((data) => {
        filterData.push({
          name: data.name,
          url: data.html_url,
          lenguaje: data.language,
          fecha: data.updated_at,
          descripcion: data.description,
        });
      });
      setRepos(filterData);
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <Jumbotron />
      <div className="container">
        <h1 className="mb-4">Tecnologias</h1>
        <div className="row">
          {tecnologias.map((item) => (
            <CardTecnologias data={item} />
          ))}
        </div>
        <h1 className="mb-4">Experiencia en el desarrollo de software</h1>
        <div className="row">
          <div className="col">
            <div className="list-group mb-5">
              {repos.map((item, index) => (
                <ItemExperiencia key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className="row">{console.log(repos)}</div>
      </div>
      <div className="fluid-container bg-dark p-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-md-4">
              <ul>
                <li>
                  <p>Alexander Serrano</p>
                </li>
                <li>
                  <p>Ingenieria en Sistemas Computacionales</p>
                </li>
                <li>
                  <p>Javascript Developer</p>
                </li>
                <li>
                  <p>Mexico Americano</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-around ">
              <a href="https://www.facebook.com/elba.neado.12532364">
                <AiFillFacebook size={70} />
              </a>
              <a href="https://www.facebook.com/elba.neado.12532364">
                <AiFillGithub size={70} />
              </a>
              <a href="https://www.facebook.com/elba.neado.12532364">
                <AiFillInstagram size={70} />
              </a>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
