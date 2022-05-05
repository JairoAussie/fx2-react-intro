import {Greeting} from "./Greeting"
import Nav from "./Nav"

const func1 = () => {
  console.log("Hey this is function 1")
}

const func2 = () =>{
  console.log("Hey this is function 2")
}

const func3 = () => {
  console.log("Hey this is function 3")
}

function App() {

  return (
    <>
        <Nav />
        <Greeting language="JSX" progress="90%" cb_func={func1} />
        <Greeting language="React" progress="30%" cb_func={func2}/>
        <Greeting language="Styled components" progress="10%" cb_func={func3}/>
    </>
  );
}

export default App;
