import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import Login from "./views/auth/Login";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  console.log(allRoutes);

  return (
    <>
      <Router allRoutes={allRoutes} />
      {/* <Login /> */}
    </>
  );
}

export default App;
