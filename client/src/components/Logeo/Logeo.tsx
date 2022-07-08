import { Target, ValueTarget } from "framer-motion";
import { KeyboardEventHandler, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {loginUser} from '../../features/user/userSlice'
import {InitialState} from '../../features/user/userSlice'
import { validate } from "./func/validate";

const Logeo = () => {
  const [input, setInput] = useState <InitialState> ({
    id : "" , 
    email: "", // segio@
    password: "", // sds2
    loged : false
  });

  const [errors , setErrors] = useState <any> ({
    email: "",
    password: "",
    loged : false
  })

  const  user  = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams ();

  const handleChange = ( event: any ) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input ,
        [event.target.name] : event.target.value
      })
    )
  };

  const handleSubmit = ( e : any ) =>{
    e.preventDefault();
    if(errors.email || errors.password || !input.email || !input.password) return;
    // dispatch (idUser)  'qqwwq12123444sadas'  // aqui insertar funcion 
    dispatch(loginUser(input)) //
    alert("Your count was created")
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Welcome</h1>
      <label htmlFor="emial">Email :</label>
      <input
        name="email"
        type="text"
        placeholder="email"
        onChange={handleChange}
        value={input.email}
      />
      <label htmlFor="password">Password :</label>
      <input
        name="password"
        type="text"
        placeholder="password"
        onChange={handleChange}
        value={input.password}
      />
      <button>Log in</button>
    </form>
  );
};

export default Logeo;


