"use client";

import useStore from "@/store/introStore";
import React, { useEffect } from "react";

function Intro() {
  // state.counter = counter state from useStore
  // we need to use the addCounter function, let destructure as below.

  const { counter, addCounter, serverData, asyncFun } = useStore((state) => {
    // We are returning an object and then destructuring the object.
    return {
      counter: state.counter,
      addCounter: state.addCounter,
      serverData: state.serverData,
      asyncFun: state.asyncFun,
    };
  });

  useEffect(() => {
    asyncFun();
  }, [asyncFun]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Counter state, Global state Zustand</h1>
      <h3>Counter No.: {counter}</h3>

      <h1>ServerData: {serverData}</h1>

      {/* Add button for adding counter state */}
      <button
        onClick={addCounter}
        className="bg-gray-800 text-white p-2"
        type="button"
      >
        Add Counter
      </button>
    </div>
  );
}

export default Intro;

// use the server data here
