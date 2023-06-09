import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';

import RequireAuth from "./components/RequireAuth/RequireAuth";


import Navigation from "./components/Navigation/Navigation";
import MenuEditAdmin from './components/MenuEditAdmin/MenuEditAdmin';
import Order from './components/Order/Order';
import OrderManagmentAdmin from './components/OrderManagmentAdmin/OrderManagmentAdmin';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>

          <Route path='order' element={<Order />} >
          </Route>

          {/* Private Routes */}

          <Route element={<RequireAuth />}>
            <Route path='menuEdit' element={<MenuEditAdmin />} />
          </Route>

          <Route element={<RequireAuth />}>
            <Route path='ordersManage' element={<OrderManagmentAdmin />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
