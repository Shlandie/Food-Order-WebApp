import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import MenuEditAdmin from './components/MenuEditAdmin/MenuEditAdmin';
import Order from './components/Order/Order';

function App() {
  return (
    <>
      <Navigation />
      <Order />
      <MenuEditAdmin />
    </>
  );
}

export default App;
