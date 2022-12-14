import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { d_increment, d_decrement } from "../../redux/dynamicCounter/action";

const DynamicCounter = () => {
  const count = useSelector((state) => state.dynamicCounter.value);
  const dispatch = useDispatch();

  const incrementBtn = (value) => {
    dispatch(d_increment(value));
  };
  const decrementBtn = (value) => {
    dispatch(d_decrement(value));
  };
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold" id="counter">
        {count}
      </div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          id="increment"
          onClick={() => incrementBtn(10)}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          id="decrement"
          onClick={() => decrementBtn(5)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default DynamicCounter;
