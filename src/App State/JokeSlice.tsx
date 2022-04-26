import { createSlice } from "@reduxjs/toolkit";
import { getJokeOfTheDay } from "../services/JODRequests";
import { jokeObject } from "../services/JODtypes";
import { RootState } from "./store";

interface JokeSlice {
  JOD: jokeObject[];
}

const initialState: JokeSlice = {
  JOD: [],
};

const JokeSlice = createSlice({
  name: "Jokes",
  initialState,
  reducers: {
    // postJokeofTheDay(state, action:PayloadAction<JokeOfTheDay[]>){
    //     // const joke =  getJokeOfTheDay;
    //     state.JOD.push()
    // }
  },
  extraReducers: (builder) => {
    // builder.addCase(getJokeOfTheDay.pending, (state) => {
    //     state.loading ;
    // }),
    builder.addCase(getJokeOfTheDay.fulfilled, (state, action) => {
      console.log(action.payload, "from slice");
      state.JOD.push(action.payload);
    });
    // builder.addCase(getJokeOfTheDay.rejected, (state) => {
    //     state.error = "error";
    // })
  },
});

//  export const {  } = JokeSlice.actions
export default JokeSlice.reducer;
export const jokeData = (state: RootState) => state.JokeSlice.JOD;
