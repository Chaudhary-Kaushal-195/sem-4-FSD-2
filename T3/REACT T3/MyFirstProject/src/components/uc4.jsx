import { useContext } from "react";
import { Fname, Lname, N1, N2 } from "./uc1";
function Uc4() {
  const first = useContext(Fname);
  const last = useContext(Lname);
  const n1 = useContext(N1);
  const n2 = useContext(N2);
  return (
    <>
      <h1>
        Your Name is {first} {last} by old king
      </h1>
      <h2>
        Your Numbers are {n1} and {n2} total is {n1 + n2}
      </h2>
    </>
  );
}
export default Uc4;
