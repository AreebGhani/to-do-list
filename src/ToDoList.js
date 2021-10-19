
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./index.css";

const ToDoList = () => {
 
  const [item, setItem] = useState("");

  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);};

  const listOfItems = () => {
   setNewItem((prevValue) => {
   return [...prevValue, item];
   });
   setItem("");
  };

  const ListCom = (props) => {
   const [line, setLine] = useState(false);
   const cutIt = () => {setLine(true);};
    return (
    <div className="todo_style">
     <span onClick={cutIt}>
       <DeleteIcon className="deleteIcon" />
     </span>
     <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
    </div>);
  };  
 
  return (
   <>
      <div className="main_div">
       <div className="center_div">
          <br />
          <h1> To Do List </h1>
          <br />
          <input type="text" value={item} placeholder="Add an Items" onChange={itemEvent} />
        <Button className="newBtn" onClick={listOfItems}><AddIcon /></Button>
          <br />
          <ol>
            {newitem.map((val, index) => { return <ListCom key={index} text={val} />;})}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;