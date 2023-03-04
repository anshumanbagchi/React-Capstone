import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/home.route.component";
import Navigation from "./components/routes/navigation/navigation.route.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
