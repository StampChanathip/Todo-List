import React, { useState } from "react";
import "./AddTask.css";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const url = "http://localhost:8000/api/todo";

  function handleSubmit() {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        detail: "",
        date: date,
        done: false,
      }),
    });
  }

  return (
    <div className="addTask">
      <form
        className="addTask-form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="addTask-box"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Add new task"
          required
        />
        <div className="addTask-label">Due date:</div>
        <input
          className="addTask-date"
          type="date"
          name="date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          required
        />
        <input className="addTask-submit" type="submit" />
      </form>
    </div>
  );
}

export default AddTask;
