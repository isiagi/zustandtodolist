import { create } from "zustand";

// const useStore can be any name you wish
const useStore = create((set) => ({
  // let create acounter state, it will be global, that's all
  counter: 0,
  //You can have multiple states, now we only have one counter state

  // To have server data, new state
  serverData: "",

  //To update state we use the set function / method
  addCounter: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),

  // async actions
  asyncFun: async () => {
    const data = await (
      await fetch("http://localhost:3001/api/testRoute")
    ).json();

    set((state) => ({
      // access the message key from the returned data
      serverData: data.message,
    }));
  },
}));

export default useStore;

// let use the counter state in the intro page.
// lets create a nextjs api route
