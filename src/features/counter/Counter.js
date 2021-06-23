import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  // read from the Redux store
  // calling 'useSelector' with a callback function and returning 'items' from Redux store.
  // automatically re-renders components after state is altered.
  const items = useSelector((state) => state.items);

  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  function handleOnClick() {
    // dispatching an action on click
    dispatch({ type: "count/increment" });
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
    </div>
  );
}

export default Counter;
