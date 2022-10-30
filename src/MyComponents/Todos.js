import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {

    let myStyle = {
        minHeight : "60vh",
        margin: "40px auto"        
    }


  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="my-3">TO-DOs List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            //  for multiple things in return statement, wrap with () and empty tags <> </>
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
