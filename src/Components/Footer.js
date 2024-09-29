import React from "react";

function Footer() {
  const divStyle = {
    width: "100%",
    clear: "both",
    textAlign: "center",
    backgroundColor: "gray",
    display: "inline-block",
    marginTop: "50px",
  };

  return (
    <div style={divStyle} className="footer">
      <h4>Built by Vignesh B ! !</h4>
    </div>
  );
}

export { Footer };
