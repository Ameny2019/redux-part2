import "./App.css";
import AddTodo from "./Components/AddTodo";
import ListTodo from "./Components/ListTodo";
import {useState} from 'react';
function App() {

    //----------- Fake Data -----------
    const [job, setJob] = useState([
      { description: "t1", id: 1, isDone: true },
      { description: "t2", id: 2, isDone: false },
      { description: "t3", id: 3, isDone: false },
    ]);

    const add = (Addtodo) =>{
      setJob([...job,Addtodo])
    }
  
  return (
    <div className="body">
      <h1  className="center" id="title">Todo List</h1>
      <AddTodo  add={add} />
      <ListTodo  className="center" jobs={job}  />
    </div>
  );
}

export default App;
