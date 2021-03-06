import React, { useState } from "react";
import EditButton from "../EditButton/EditButton";
import "./Task.css";
import moment from "moment";

function Task(props) {
  const [done, setDone] = useState(props.done);
  const url = "http://localhost:8000/api/todo/" + props.Id;

  function deleteClicked() {
    fetch(url, {
      method: "DELETE",
    });
  }

  function handleCheck(e) {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        done: e.target.checked,
      }),
    }).then(() => {
      setDone(e.target.checked);
    });
  }

  return (
    <div className="task">
      <div className="task-box">
        <input
          className="task-checkbox"
          type="checkbox"
          defaultChecked={done}
          onClick={(e) => {
            handleCheck(e);
          }}
        />
        <div className={"task-title" + (done ? "-done" : "")}>
          {props.title}
        </div>
        <div className="task-due">
          Due Date: {moment(props.date).format("DD MMM YYYY")}
        </div>
        <EditButton
          title={props.title}
          detail={props.detail}
          date={props.date}
          Id={props.Id}
          updated={props.updated}
          isUpdated={props.setUpdated}
        />
        <button className="task-delete" onClick={deleteClicked}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
