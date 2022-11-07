import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import A from './exam/a.js';
import B from './exam/b.js';

function App() {
   return (
            <BrowserRouter>
                <div className="container">
                       <Routes>
                       <Route path="/*" element={<Labs/>}/>
                          <Route path="/hello" element={<HelloWorld/>}/>
                          <Route path="/tuiter/*" element={<Tuiter/>}/>
                       </Routes>
                </div>
            </BrowserRouter>
   );
}
export default App;

//                           <Route index element={<Labs/>}/>



/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to Web Development 2022
        </h1>
        <h2>This is a branch for assignment 2 </h2>
        <h2>This is a branch for assignment 3 </h2>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/