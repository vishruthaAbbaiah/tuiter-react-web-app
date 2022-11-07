import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
const Exam = () => {
 let A = {
    C: 'F',
    D: 'G'
  }
  let B = {
    D: 'H',
    E: 'I',
    ...A,
  }
  A = {
    ...B,
    D: 'J',
    E: 'K'
  }
    return(
    <>
        <h1>EXAM</h1>
  <Link to="/qwe/2/3">ABC</Link>
  <Link to="/asd/7/5">DEF</Link>
  <Routes>
    <Route path="/qwe/2/3" element={<A/>}/>
    <Route path="/asd/7/5" element={<B/>}/>
  </Routes>
</>

    )
}

export default Exam;