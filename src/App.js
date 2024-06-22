import logo from './logo.svg';
import './App.css';
import Greet from "./component/basic.js"


// creat a function
function says(){
  return (<div>Good Job</div>)
}


function App() {
  return (
    <>
    {/* direct print */}
    {/* <h1>Hii Sangeeta</h1> */}

    {/* print by using component */}
    <Greet/>


    {/* call the function */}
    {says()}
    </>
  );
}

export default App;
