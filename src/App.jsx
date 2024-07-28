import { useEffect, useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoutes";
import { getRoutes } from "./router/routes";
import { privateRoutes } from "./router/routes/PrivateRoutes";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  // const [routes, setRoutes] = useState([...privateRoutes]);
  // console.log(allRoutes);
  // console.log("routes", routes);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
    console.log(routes);
  }, []);

  return (
    <>
      <Router allRoutes={allRoutes} />
    </>
  );
}

export default App;
