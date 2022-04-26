import Paper from "@mui/material/Paper";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../App State/hooks";
import { getJokeOfTheDay } from "../services/JODRequests";
import { jokeData } from "../App State/JokeSlice";
import { useEffect } from "react";

export default function JokeCard() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getJokeOfTheDay());
  }, [dispatch]);

  const joke = useAppSelector(jokeData);
  console.log(joke, "in card");
  return (
    <Paper sx={{ width: 500, margin: "auto" }} elevation={3}>
      {joke.map((jokedetails, index) => {
        return (
          <Card sx={{ minWidth: 275 }} key={index}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Joke Of The Day
              </Typography>
              <Typography variant="h5" component="div">
                {jokedetails.title}
              </Typography>
              <Typography variant="body2">{jokedetails.text}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </Paper>
  );
}
