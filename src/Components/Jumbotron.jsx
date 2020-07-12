import React from "react";
import foto from "../static/miFoto.jfif";
const Header = () => {
  return (
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-4">
          <img className="w-100" src={foto} alt="" />
        </div>
        <div className="col-md-6">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">
            Soy Alexander Serrano un apasionado de la tecnologia, me gusta
            programar y soy muy curioso con respecto como estan construidas
            ciertas aplicaciones de nuestro dia a dia.
          </p>
          <hr className="my-4" />
          <p>
            Actualmente soy un estudiante de la carrera de Ingenieria
            en Sistemas computacionales en el Instituto Tecnologico de Durango.
          </p>
          <ul>
            <li>
              <p>Alexander Serrano</p>
            </li>
            <li>
              <p>Durango, DGO</p>
            </li>
            <li>
              <p>Edad 20 años</p>
            </li>
            <li>
              <p>Ingenieria en Sistemas Computacionales en el Instituto Tecnologico de Durango</p>
            </li>
            <li>
              <p>Javascript Developer</p>
            </li>
            <li>
              <p>Mexico Americano</p>
            </li>
            <li>
              Contactos
              <ul>
                <li>CORREO: cyasam7@gmail.com</li>
                <li>TELEFONO: 6183240572</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
