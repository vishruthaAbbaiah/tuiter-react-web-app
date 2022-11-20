import {Link, useLocation} from "react-router-dom";
import {useState} from "react";

import {useParams} from "react-router-dom";
const Gyurykq = () => {
  const {ns, cfu} = useParams();
  return(
    <h1 id="uhqrh">{ns + cfu}</h1>
  );
};
export default Gyurykq;