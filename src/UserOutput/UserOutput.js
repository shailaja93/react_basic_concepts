import React from "react";

const userOutput = props => {
  const style = {
    color: "#ff0000"
  };
  return (
    <div>
      <p style={style}>
        Hey <b>{props.username}!</b> Please find my assignment
      </p>
      <p>
        React is all about components - basically custom HTML elements - with
        which you can quickly build amazing and powerful web apps. Just build a
        component once, configure it to your needs, dynamically pass data into
        it (or listen to your own events!) and re-use it as often as needed.
      </p>
      <p>
        This course will start at the very basics and explain what exactly React
        is and how you may use it (and for which kind of apps). Thereafter,
        we'll go all the way from basic to advanced. We'll not just scratch the
        surface but dive deeply into React as well as popular libraries like
        react-router and Redux.{" "}
      </p>
    </div>
  );
};

export default userOutput;
