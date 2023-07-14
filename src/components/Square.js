import React from "react";

const Square = ({ value, onClick, color }) => {
  const style = {
    background: color,
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;