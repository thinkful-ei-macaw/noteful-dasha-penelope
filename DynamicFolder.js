import React, { Component } from "react";
import DynamicNote from "./DynamicNote";
import App from "./App";

class DynamicFolder extends Component {
  render() {
    return (
      <div className="folder">
        <h2>Folder</h2>
        <App />
        <DynamicNote />
      </div>
    );
  }
}

export default DynamicFolder;
