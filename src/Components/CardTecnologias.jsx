import React from "react";

const CardTecnologias = ({data}) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3">
        <h3 className="card-header">{data.titulo}</h3>
        <div className="card-body">
          <p className="card-text">
            {data.descripcion}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          {data.tecnologias.map((item, index)=>(
              <li key={index} className="list-group-item">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CardTecnologias;
