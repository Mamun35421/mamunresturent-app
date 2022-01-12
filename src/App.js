import logo from './logo.svg';
import './App.css';
import {Container, Typography} from "@material-ui/core"
import Order from './Components/Order/indes';
import Form from './layouts/Form';
import Input from './controls/input';

function App() {
  return (
    <Container maxWidth="md">
      <Typography
      gutterBottom
      variant="h2"
      align='center'>
        Resturent App hhh
      </Typography>

      <Order />
      <Form />
      <Input />

    </Container>
   
  );
}

export default App;
