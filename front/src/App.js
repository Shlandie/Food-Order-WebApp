import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import MenuEditAdmin from './components/MenuEditAdmin/MenuEditAdmin';
import Order from './components/Order/Order';
import OrderManagmentAdmin from './components/OrderManagmentAdmin/OrderManagmentAdmin';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/order' element={<Order />}>
        </Route>
        <Route path='/menuEdit' element={<MenuEditAdmin />}></Route>
        <Route path='/ordersManage' element={<OrderManagmentAdmin />}>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
