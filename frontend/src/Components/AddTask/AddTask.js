import React, { useState } from "react";
import "./AddTask.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddTask() {
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
          className="addTask-input"
          maxLength={15}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Add new task"
          required
        />
        <div className="addTask-label">Due date:</div>
        <div>
          <DatePicker
            className="addTask-date"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <input className="addTask-submit" type="submit" />
      </form>
    </div>
  );
}

export default AddTask;
