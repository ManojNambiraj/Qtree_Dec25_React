import React, { useState } from "react";

function LocalState() {
  const [state, setState] = useState(0);
  const [color, setColor] = useState("white");

  function handleLike(){
    setState(state + 1)
    setColor("green")
  }

  function handleDislike(){
    setState(state - 1)
    setColor("red")
  }

  return (
    <div style={{ height: "600px", backgroundColor: color }}>
      <h1>{state}</h1>

      <button onClick={handleLike}>👍 Like</button>
      <button onClick={handleDislike}>👎 Dislike</button>
    </div>
  );
}

export default LocalState;
