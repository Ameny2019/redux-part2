import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoslice";
import "../Components/AddTodo.css";
import { Button } from 'react-bootstrap';


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

//
const AddTodo = () =>{
    const  dispatch =useDispatch();
const [description, setdescription]=useState("");
return(
    <>

<Row className="center">
       
        <Col>
          <Form.Control  id="one" size="sm" type="text"  onChange={(e)=>setdescription(e.target.value)} placeholder="set todo" />
          <Button variant="info" onClick={() => dispatch(addTodo(description))} >Add</Button>

        </Col>
      </Row>
      
   
      
    </>
)
}

export default AddTodo;


