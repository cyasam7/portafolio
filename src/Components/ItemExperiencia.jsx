import React from "react";
const ItemExperiencia = ({data}) => {
  return (
    <a href={data.url} className="list-group-item list-group-item-action flex-column align-items-start active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{data.name}</h5>
        <small>{data.fecha}</small>
      </div>
      <p className="mb-1">
        {data.descripcion}
      </p>
      <small>{data.lenguaje}</small>
    </a>
  );
};
export default ItemExperiencia
