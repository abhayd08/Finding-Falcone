import { Routes, Route } from "react-router-dom";
import Introduction from "./Components/Introduction";
import Galaxy from "./Components/Galaxy";
import Result from "./Components/Result";
function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Introduction}></Route>
      <Route path="/galaxy" Component={Galaxy}></Route>
      <Route path="/result" Component={Result}></Route>
    </Routes>
  );
}

export default App;
