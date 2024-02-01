import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};

function Basics() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>{count}</p>
      <div className="btn-Style">
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment by 1
        </button>
        <button
          onClick={() => dispatch({ type: "increment", value: 5 })}
          style={{ margin: "20px" }}
        >
          Increment by 5
        </button>
        <button onClick={() => dispatch({ type: "increment", value: 10 })}>
          Increment by 10
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          style={{ margin: "20px" }}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </>
  );
}

export default Basics;

// import React, { useState } from "react";

// function Basics() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h3>Count: {count}</h3>
//       <div>
//         <button onClick={() => setCount(count + 1)} style={{margin:'20px'}}>Increment</button>
//         <button onClick={() => setCount(count - 1)}>decrement</button>
//       </div>
//     </div>
//   );
// }

// export default Basics;
