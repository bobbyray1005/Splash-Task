import { createSlice } from "@reduxjs/toolkit";

export const theStore = createSlice({
  name: "theStore",
  initialState: {
    userName: "",
    balance: 1000,
    generatedValue: 0,
    speed: 0,
    animShow: false,
    usersRanking: [],
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },

    generateVal: (state, action) => {
      state.animShow = true;
      state.generatedValue = action.payload;
    },

    speedStateVal: (state, action) => {
      state.speed = action.payload;
    },

    animStateVal: (state, action) => {
      state.animShow = action.payload;
    },

    updateBalanceVal: (state, action) => {
      state.balance = action.payload;
    },

    setUsersRanking: (state, action) => {
      state.usersRanking = action.payload;
    },
  },
});

export const {
  setUserName,
  generateVal,
  speedStateVal,
  animStateVal,
  updateBalanceVal,
  setUsersRanking,
} = theStore.actions;

export default theStore.reducer;
