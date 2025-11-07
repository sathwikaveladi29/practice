import './App.css';
import Messagecomponents from './components/messagecomponents';
import Statecounter from './components/statecounter';
 import SignIn from './components/signin';
import Togglecomp from './components/ToggleComp';
import Conditonalrender from './components/conditonalrender';
import ConditionalSwitch from './components/ConditionalSwitch';
import ListDemo from './components/ListDemo';
import Routing from './components/routing';

 function App() {
  const items=["apple","banana","cherry"];
//   const users=[
//     {id:1,name:"alice"},
//     {id:2,name:"bob"},
//   ];

   return (

  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <h1 id="header">
  //         React Javascript
  //       </h1>
         
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // <h1>iam a simple component</h1>
  //<Messagecomponents name="shiv"></Messagecomponents>
  // <Statecounter></Statecounter>
  <SignIn></SignIn>
  // <Togglecomp></Togglecomp>
  //<Conditonalrender isSignIn={false}></Conditonalrender>
  // <ConditionalSwitch status="info"></ConditionalSwitch>
  // <ListDemo items={items}></ListDemo>
  // <Routing></Routing>
  );
  
}

export default App;
