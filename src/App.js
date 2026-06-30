//Git Pratice
import Weather from './Weather';
 import Counter from './Counter';
 import Calculator from './Calculator';
 import Clock from './Clock';
 import Todo from './Todo';
 import Login from './Login';
 import Student from './Student';
 import Age from './Age';
 import Theme from './Theme';
 import Quote from './Quote';
 import Color from './Color';
 import Greeting from './Greeting';
 import Temperature from './Temperature';
 import Name from './Name';
 import EvenOdd from './EvenOdd';
 import BMI from './BMI';
 import Voting from './Voting';
 import Table from './Table';
 import Converter from './Converter';
 import Quiz from './Quiz';
function App() {
  return (
    <div style={{ textAlign: "centre" ,
    display: "flex",
    flexDirection: "column",
    alignItems: "centre",
    justifyContent: "centre",
    minHeight: "100vh",          
    marginTop: "50px" }}>
      <h1>React Mini Projects</h1>
      <h2>Developed by Asritha Sai</h2>
      <p>This project demontrates React Components,Hooks,State Management and Event Handling.</p>
      <hr />
      <Weather />
      <hr />
      <Counter />
      <hr />
      <Calculator />
      <hr />
      <Clock />
      <hr />
      <Todo />
      <hr />
      <Login />
      <hr />
      <Student />
      <hr />
      <Age />
      <hr />
      <Theme />
      <hr />
      <Quote />
      <hr />
      <Color />
      <hr />
      <Greeting />
      <hr />
      <Temperature />
      <hr />
      <Name />
      <hr />
      <EvenOdd />
      <hr />
      <BMI />
      <hr />
      <Voting />
      <hr />
      <Table />
      <hr />
      <Converter />
      <hr />
      <Quiz />
    </div>
  );
}
export default App;
