import logo from './logo.svg';
import './App.css';
import {Container, Typography} from "@material-ui/core"
import Order from './Components/Order/orderForm';

import Form from './layouts/Form';


function App() {
  return (
    <Container maxWidth="md">
      <Typography
      gutterBottom
      variant="h2"
      align='center'>
        Restaurant App
      </Typography>

      <Order />
      <Form />
      

    </Container>
   
  );
}

export default App;
