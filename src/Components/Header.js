import React from "react";

function Header() {
  const divStyle = {
    width: "100%",
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    textAlign: "center",
    backgroundColor: "gray",
  };

  return (
    <div style={divStyle} className="header">
      <h4> CV Application Creator</h4>
    </div>
  );
}

export { Header };
