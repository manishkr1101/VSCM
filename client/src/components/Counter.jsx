import React, { Component } from "react";

function Counter() {
  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="Counter">
      <div>
        <h3>
          <text>
            <center>
              Total Vaccination Doses: {counter} <br />
              India marches beyond 1 Billion Vaccine doses!
            </center>{" "}
            <br />
          </text>
        </h3>
      </div>
    </div>
  );
}

export default Counter;
