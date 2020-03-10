import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DynamicNote from "./DynamicNote";

function MainRoute(props) {
  return (
    <div className="MainRoute">
      <h1>Noteful</h1>
      <ul>
        {props.notes.map(note => (
          <li key={note.id}>
            <DynamicNote
              id={note.id}
              name={note.name}
              modified={note.modified}
            />
          </li>
        ))}
      </ul>
      <div className="MainRoute__button-container">
        <button
          tag={Link}
          to="/add-note"
          type="button"
          className="MainRoute__add-note-button"
          icon="plus"
        />
        Note
      </div>
    </div>
  );
}

MainRoute.defaultProps = {
  notes: []
};

export default MainRoute;
