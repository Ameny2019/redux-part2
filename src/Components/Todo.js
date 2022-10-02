import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import "./ListTodo.css";
import {deletetodo,toggletodo, edittodo } from "../redux/todoslice";
const Todo = ({job}) => {
const  dispatch =useDispatch ();
  return (
    <div >
      <h1 className="center"> title: {job.title}</h1>
      <p className="center"id="bol"> status: {job.isDone?"True":"false"}</p>
      <div className="center">
      <Button   className="marget" variant="info" onClick={()=>dispatch (deletetodo(job.id))}>Supprimer</Button>
   
      <Button className="marget"   variant="info" onClick={()=>dispatch (toggletodo(job.id))}>Done/Not Done</Button>
      
      <Button   className="marget" variant="info" onClick={()=>dispatch (edittodo(job.id))}>Modifier</Button>
      </div>
   
    </div>
  );
};

export default Todo;
