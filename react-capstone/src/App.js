import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./components/routes/home/home.route.component";
import Navigation from "./components/routes/navigation/navigation.route.component";
import Authentication from "./components/routes/auth/auth.route.component";
import Shop from "./components/routes/shop/shop.route.component";
import Checkout from "./components/routes/checkout/checkout.route.component";
import { checkUserSession } from "./store/user/user.actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
