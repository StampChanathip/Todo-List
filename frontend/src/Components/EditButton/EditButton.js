import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./EditButton.css";
import DatePicker from "react-datepicker";

function EditButton(props) {
  const [title, setTitle] = useState(props.title);
  const [detail, setDetail] = useState(props.detail);
  const [date, setDate] = useState(props.date);

  const url = "http://localhost:8000/api/todo/" + props.Id;

  function dataUpdate() {
    fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        date: date,
        detail: detail,
      }),
    }).then(() => {
      props.isUpdated(!props.updated);
    });
  }

  return (
    <Popup
      trigger={<button className="detailButton"> Edit </button>}
      modal
      nested
    >
      {(close) => (
        <div className="detail-box">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="popup-header"> Task Edit </div>
          <div className="box">
            <p>Title: </p>
            <input
              className="input-box"
              defaultValue={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </div>
          <div className="box">
            <p>Due Date: </p>
            <div>
              <DatePicker
                className="input-box"
                selected={Date.parse(date)}
                onChange={(date) => setDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
          <p>Note: </p>
          <textarea
            cols="5"
            className="detail-input-box"
            defaultValue={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
          <div className="actions">
            <button
              className="save-button"
              onClick={() => {
                dataUpdate();
                close();
                window.location.reload();
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default EditButton;
