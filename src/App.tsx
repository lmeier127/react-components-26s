import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import PizzaToppings from './PizzaToppings';
import TsteeleComponent from './TsteeleComponent';
import Welcome from './Welcome';
import LmeierComponent from './LmeierComponent';

const App = () => {

  return (
    <div
      className='m-3'
    >
      <h1>
        React Components
      </h1>
      <PizzaToppings />
      <TsteeleComponent />
      <Welcome />
      <LmeierComponent />
    </div>
  );
}

export default App
