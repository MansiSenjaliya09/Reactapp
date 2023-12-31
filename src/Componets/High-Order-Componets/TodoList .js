import React, { useEffect, useState } from "react";
import Highordercomponets from "./Highordercomponets";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = Highordercomponets(TodoList, "todos");

export default SearchTodos;