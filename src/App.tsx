import "./App.css";
import NavBar from "./Components/Navbar";
import JokeCard from "./Components/JokeCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"

function App() {
  return (
    <Container>
      <section style={{ margin: 20 }}>
        <Grid container>
          <Grid item xs={4}>
            <NavBar />
          </Grid>
          <Grid item xs={8}>
            <JokeCard />     
          </Grid>
        </Grid>
      </section>
    </Container>
  );
}
export default App;
