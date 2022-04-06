import React from "react";
import { useState } from "react";
import FormTodoList from "../../component/FormTodoList";
import Navbar from "../../component/Navbar";

const Home = () => {
  const [todos, setTodos] = useState([
    {
      text: "Mengerjakan Exercise",
      completed: false,
    },
    {
      text: "Mengerjakan Assignment",
      completed: true,
    },
  ]);

  return (
    <>
      <Navbar />
      <FormTodoList todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Home;
