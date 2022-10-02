import Todo from "./Todo";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./ListTodo.css";
import { Button } from 'react-bootstrap';



const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const [statetodo, setStatetodo] = useState(false);
  const [filtermode, setFiltermode] = useState(false);


  const handleFilter = () => {
    setStatetodo(!statetodo);


    };
  const handleShow = () => {

    setFiltermode(!filtermode);

    };

  return (
    <div className="center">


      <Button onClick={handleShow} >
      {filtermode ? "filter by " : "Showall"}
     </Button>




      {filtermode &&  (<Button className="center" onClick={handleFilter}>
      {statetodo ? "not done " : "done"}
       </Button>)}

      {filtermode ? ( <div className="center">{todos.filter((f) => f.isDone !== statetodo).map((f) => (<Todo job={f} />))}</div>) : ( <div> {todos.map((f) => (
        <Todo job={f} />))}</div>)}






    </div>
  );
};

export default ListTodo;