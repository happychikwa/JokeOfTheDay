import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { jokeObject } from "./JODtypes";

const BASE_API_URL = "https://api.jokes.one/";

export const getJokeOfTheDay = createAsyncThunk(
  "jokeOfTheDay/GET",
  async () => {
    const response = await axios.get(BASE_API_URL + "jod");
    const { success, contents } = response.data;
    const { jokes } = contents;
    const jokeInfo = jokes[0];
    console.log(jokeInfo["joke"], "from req");
    if (success) {
      return jokeInfo["joke"];
    } else {
      return [];
    }
  }
);
