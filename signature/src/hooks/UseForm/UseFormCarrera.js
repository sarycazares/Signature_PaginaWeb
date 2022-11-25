import {useState, useRef}from "react";
import {createCarrera, updateUsuario} from "../../services/carreraService";


export default  function useFormCarrera(initialForm, validateForm){

const[form,setForm] = useState(initialForm);
const[errors,setErrors]=useState({});
const[loading,setLoading]=useState(false);
const[response,setResponse]=useState(null);

const handleChange=(event)=>{
    const{name,value} = event.target;
setForm({
    ...form,
    [name]: value,
  });

  //console.log(form);

};
const handleBlur=(event)=>{
    handleChange(event);
setErrors(validateForm(form));
};

const handleSubmit= async (event)=>{
    event.preventDefault();
    const res = await createCarrera(form);
    console.log(res);
};

return{
form, errors,loading,response,handleChange,handleBlur, handleSubmit

};
}