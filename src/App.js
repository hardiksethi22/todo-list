import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I will delete a todo", todo);
    // //deleting this way in react doesn't work -- but workds in angular
    // let index = todos.indexOf(todo);
    // todos.splice(index , 1);

    setTodos(
      todos.filter((p) => {
        return p !== todo;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("adding a new todo to the list ", title, desc);

    let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={false} />
        <Routes>
           <Route
            exact path="/"
            element={
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
            }       
           />
          <Route exact path="/about" element={<About />} />
            
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;

{
  /* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */
}
