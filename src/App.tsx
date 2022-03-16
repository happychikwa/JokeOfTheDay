import './App.css';
import NavBar from './Components/Navbar';
import JokeCard from './Components/JokeCard';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

function App() {
  return (
    <Container>
        <section>
          <NavBar />
        </section>
        <section style={{margin: 20}} >
          <JokeCard/>
        </section>
    </Container>
  );
}
export default App;
