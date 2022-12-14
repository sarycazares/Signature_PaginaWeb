import React, { useState } from "react";
import ModalRegistro from '../../login/modales/modalRegistro';
import { createUsuario } from "../../../services/UsuarioService";

const usuarioInit = {
    color: "",
    matricula: "",
    usuario: "",
    facultad: "",
    carrera: "",
    semestre: "",
    contraseña: "",
    confirmarContraseña: "",
  };

export default function UsuarioCreate() {
    const [usuario, setUsuario] = useState(usuarioInit);
    const guardar = async (event) => {
      event.preventDefault();
  
      const res = await createUsuario(usuario);
      console.log(res);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setUsuario({
        ...usuario,
        [name]: value,
      });
    };

    return (
    <ModalRegistro
      titulo={"Crear usuario"}
      handleChange={handleChange}
      handleSubmit={guardar}
      usuario={usuario}
    />
  );
}
