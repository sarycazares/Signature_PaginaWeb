import {AxiosConfig as axios} from "./AxiosConfig"

export const getUsuarios = async () => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const response = await axios.get("/usuario");
  
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const createUsuario = async (usuario) => {
    try {
      console.log(usuario);
      const response = await axios.post("/usuario", usuario);
      console.log("si que si");
      return "Creado con éxito";
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };