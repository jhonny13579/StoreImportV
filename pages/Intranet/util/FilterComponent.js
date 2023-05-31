/** @format */

import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

const FilterComponent = React.memo((props) => {
  const handleClear = () => {
    if (props.filterText) {
      props.onClear();
    }
  };

  return (
    <div id="ContenedorFilter" style={{display: 'flex'}}>
      {props.stateAdd ? (
        <button
          id="ButtonAdd"
          style={{
            borderRadius: "5px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0D4924",
            color: "white",
            border: "2px gray #226fbe",
            border: "none",
            background:"rgba(240,0,0,230)",
            padding: "0px 30px",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            marginRight: "15px",
          }}
          type="button"
          onClick={props.handleShow}
        >
          Agregar
        </button>
      ) : (
        <></>
      )}
      <input
        type="text"
        id="TextFilter"
        value={props.filterText}
        onChange={props.onFilter}
        placeholder="Filtrar por nombre"
        style={{
      
          height: "32px",
          width: "100%",
          borderRadius: "5px 0px 0px 5px",
          border: "1px solid rgb(229, 229, 229)",
          padding: "0px 32px 0px 16px",
        }}
      />
      <button
        id="ButtonClear"
        style={{
          borderRadius: "0px 5px 5px 0px",
          height: "34px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#062212",
          color: "white",
          border: "2px gray #226fbe",
          border: "none",
          padding: "0px 30px",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          background:"rgba(240,0,0,230)",
        }}
        type="button"
        onClick={handleClear}
      >
        <ClearIcon />
      </button>
      {/* <button onClick={handleClear}>Clear</button> */}
    </div>
  );
});

export default FilterComponent;
