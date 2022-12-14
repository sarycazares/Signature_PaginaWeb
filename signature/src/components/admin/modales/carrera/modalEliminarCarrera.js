import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../../../css/formularios.css";
import RegEx from "../../../../hooks/RegEx";
import useFormCarrera from "../../../../hooks/UseForm/UseFormCarrera";
import ModalsEvents from "../../../../hooks/ModalsEvents";
import { BrowserRouter } from "react-router-dom";


const initialForm = {
  facultad: "",
  carrera: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regExFacultad = RegEx.regFacultad;
  let regExCarrera = RegEx.regCarrera;

  //if de los RegEx

  if (form.facultad.trim().match(regExFacultad)) {
    //console.log("listo");
  } else {
    errors.facultad = "Escribe correctamente tu facultad";
  }

  if (form.regExCarrera.trim().match(regExCarrera)) {
    //console.log("listo");
  } else {
    errors.regExCarrera = "Escribe una carrera valida";
  }

  return errors;
};

export default function ModaEliminarFacultad(props) {
  const { show, handleClose, handleShow } = ModalsEvents();

  // Se mandan a importar las funciones necesarias desde hooks de UseForm que hara cada
  // comportamiento de mi form

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormCarrera(initialForm, validationsForm);

  return (
    <>
      <Button variant="primary" className="buttonHeader" onClick={handleShow}>
        Eliminar Carrera
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form" id="form">
              <h1>Eliminar Carrera</h1>
              <br />

              <div className="grupo">
              <h4>Facultad</h4>
              <select class="categorias-select" name="facultad"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
                    </select>
                    
              </div>
              <br />

              <div className="grupo">
              <h4>Carrera</h4>
              <select class="categorias-select" name="carrera"
                  onChange={handleChange} id="menuEtiquetas"> 
                        <option selected value = "0"> 
                            ...
                        </option>
                                    
                    </select>
                    
              </div>
              <br />

              <Button type="submit" variant="secondary">
                Eliminar
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
