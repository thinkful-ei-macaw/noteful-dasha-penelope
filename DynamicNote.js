import React, { Component } from "react";

class DynamicNote extends Component {
  render() {
    return (
      <section className="DynamicNote">
        <Note
          id={props.note.id}
          name={props.note.name}
          modified={props.note.modified}
        />
        <div className="DynamicNote__content">
          {props.note.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}

DynamicNote.defaultProps = {
  note: {
    content: ""
  }
};
export default DynamicNote;
